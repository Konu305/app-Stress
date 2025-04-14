/*
  # Update registration policies

  1. Changes
    - Drop and recreate insert policies to ensure clean state
    - Implement proper authentication checks

  2. Security
    - Ensure users can only create their own profile
    - Remove public access policy
*/

-- First drop all existing insert policies
DROP POLICY IF EXISTS "Users can create their own profile" ON profiles;
DROP POLICY IF EXISTS "Enable insert for registration" ON profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON profiles;

-- Create a new insert policy with a unique name
CREATE POLICY "profiles_insert_policy_2025"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);