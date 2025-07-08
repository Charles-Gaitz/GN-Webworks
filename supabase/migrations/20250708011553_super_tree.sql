/*
  # Create contacts table with RLS policies

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `company` (text, optional)
      - `budget` (text, optional)
      - `message` (text, required)
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `contacts` table
    - Add policy for anonymous/authenticated users to submit contact forms
    - Add policy for service role to read all contacts

  3. Indexes
    - Add index on email for faster queries
    - Add index on created_at for sorting
*/

-- Create the contacts table if it doesn't exist
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  budget text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on the table
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist and recreate them
DO $$
BEGIN
  -- Drop the insert policy if it exists
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contacts' 
    AND policyname = 'Anyone can submit contact forms'
  ) THEN
    DROP POLICY "Anyone can submit contact forms" ON contacts;
  END IF;

  -- Drop the select policy if it exists
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contacts' 
    AND policyname = 'Service role can read all contacts'
  ) THEN
    DROP POLICY "Service role can read all contacts" ON contacts;
  END IF;
END $$;

-- Create the insert policy for contact form submissions
CREATE POLICY "Anyone can submit contact forms"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create the select policy for service role access
CREATE POLICY "Service role can read all contacts"
  ON contacts
  FOR SELECT
  TO service_role
  USING (true);

-- Create indexes if they don't exist
CREATE INDEX IF NOT EXISTS contacts_email_idx ON contacts(email);
CREATE INDEX IF NOT EXISTS contacts_created_at_idx ON contacts(created_at DESC);