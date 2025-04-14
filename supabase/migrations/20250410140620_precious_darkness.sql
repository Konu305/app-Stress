/*
  # Add admin access policy for profiles table

  1. Security Changes
    - Add policy to allow service role to read all profiles
    - This enables administrators to view all user data through the Supabase dashboard

  2. Important Notes
    - This policy only affects requests using the service_role key
    - Regular users are still restricted by existing RLS policies
*/

-- Enable admin access to all profiles
CREATE POLICY "Enable admin access to all profiles"
  ON profiles
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);