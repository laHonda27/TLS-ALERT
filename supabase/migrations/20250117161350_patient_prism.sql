/*
  # Create slots tracking table

  1. New Tables
    - `slots`
      - `id` (uuid, primary key)
      - `date` (date)
      - `time` (time)
      - `available` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
  2. Security
    - Enable RLS on `slots` table
    - Add policies for authenticated users to read slots
*/

CREATE TABLE IF NOT EXISTS slots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  time time NOT NULL,
  available boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(date, time)
);

ALTER TABLE slots ENABLE ROW LEVEL SECURITY;

-- Policy: Authenticated users can read slots
CREATE POLICY "Authenticated users can read slots"
  ON slots
  FOR SELECT
  TO authenticated
  USING (true);