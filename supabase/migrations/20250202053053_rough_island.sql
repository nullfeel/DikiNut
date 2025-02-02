/*
  # Initial Schema Setup for DickyNutri

  1. New Tables
    - users_table
      - id (uuid, primary key)
      - email (text, unique)
      - full_name (text)
      - height (numeric)
      - weight (numeric)
      - age (integer)
      - gender (text)
      - created_at (timestamp)
    
    - meal_history
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - recipe_id (integer)
      - recipe_name (text)
      - calories (numeric)
      - protein (numeric)
      - carbs (numeric)
      - fat (numeric)
      - date_added (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Users Table
CREATE TABLE users_table (
  id uuid PRIMARY KEY DEFAULT auth.uid(),
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  height numeric NOT NULL,
  weight numeric NOT NULL,
  age integer NOT NULL,
  gender text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Meal History Table
CREATE TABLE meal_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users_table(id) NOT NULL,
  recipe_id integer NOT NULL,
  recipe_name text NOT NULL,
  calories numeric NOT NULL,
  protein numeric NOT NULL,
  carbs numeric NOT NULL,
  fat numeric NOT NULL,
  date_added timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users_table ENABLE ROW LEVEL SECURITY;
ALTER TABLE meal_history ENABLE ROW LEVEL SECURITY;

-- Policies for users_table
CREATE POLICY "Users can read own data"
  ON users_table
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users_table
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own data"
  ON users_table
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Policies for meal_history
CREATE POLICY "Users can read own meal history"
  ON meal_history
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own meal history"
  ON meal_history
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own meal history"
  ON meal_history
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);