/*
  # Create contacts table for lead management

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `company` (text, optional)
      - `budget` (text, optional)
      - `message` (text, required)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contacts` table
    - Add policy for authenticated users to insert their own contact submissions
    - Add policy for service role to read all contacts (for admin access)
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  budget text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions (both authenticated and anonymous users)
CREATE POLICY "Anyone can submit contact forms"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow service role to read all contacts (for admin access)
CREATE POLICY "Service role can read all contacts"
  ON contacts
  FOR SELECT
  TO service_role
  USING (true);

-- Create an index on email for faster queries
CREATE INDEX IF NOT EXISTS contacts_email_idx ON contacts(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS contacts_created_at_idx ON contacts(created_at DESC);