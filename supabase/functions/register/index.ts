import { createClient } from 'npm:@supabase/supabase-js@2.39.7';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    const { username, email, password } = await req.json();
    console.log('Received registration request:', { 
      username, 
      email, 
      password: password ? '[PROVIDED]' : '[EMPTY]' 
    });

    // Basic validation
    if (!username || !email || !password) {
      const missingFields = [];
      if (!username) missingFields.push('username');
      if (!email) missingFields.push('email');
      if (!password) missingFields.push('password');
      
      console.log('Missing required fields:', missingFields);
      return new Response(
        JSON.stringify({ 
          message: 'Missing required fields', 
          details: missingFields 
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (password.length < 8) {
      console.log('Password too short');
      return new Response(
        JSON.stringify({ message: 'Password must be at least 8 characters long' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check if username already exists
    console.log('Checking if username exists:', username);
    const { data: existingUsers, error: userCheckError } = await supabase
      .from('profiles')
      .select('username')
      .eq('username', username)
      .limit(1);

    if (userCheckError) {
      console.error('Error checking username:', userCheckError);
      return new Response(
        JSON.stringify({ message: 'Error checking username availability' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (existingUsers && existingUsers.length > 0) {
      console.log('Username already taken:', username);
      return new Response(
        JSON.stringify({ message: 'Username already taken' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create user in Supabase Auth
    console.log('Creating auth user for:', email);
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true
    });

    if (authError) {
      console.error('Auth error:', authError);
      return new Response(
        JSON.stringify({ message: authError.message }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!authData.user?.id) {
      console.error('No user ID returned from auth');
      return new Response(
        JSON.stringify({ message: 'Error creating user' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create user profile without password
    console.log('Creating profile for user:', authData.user.id);
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .insert([
        {
          id: authData.user.id,
          username,
          email
        }
      ])
      .select()
      .single();

    if (profileError) {
      console.error('Profile creation error:', profileError);
      // Clean up: delete the auth user if profile creation fails
      await supabase.auth.admin.deleteUser(authData.user.id);
      
      return new Response(
        JSON.stringify({ message: 'Error creating user profile' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Registration successful for:', username);
    return new Response(
      JSON.stringify({
        message: 'Registration successful',
        user: {
          id: profile.id,
          username: profile.username,
          email: profile.email
        }
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Internal server error:', error);
    return new Response(
      JSON.stringify({ message: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});