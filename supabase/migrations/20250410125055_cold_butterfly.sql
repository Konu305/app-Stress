/*
  # Update profiles table policies

  1. Security Changes
    - Drop existing INSERT policy
    - Add new INSERT policy for the profiles table that allows both authenticated and anon users
    - This ensures new users can create their profile during registration
*/

DROP POLICY IF EXISTS "Users can create their own profile" ON profiles;

CREATE POLICY "Enable insert for registration"
  ON profiles
  FOR INSERT
  TO public
  WITH CHECK (true);