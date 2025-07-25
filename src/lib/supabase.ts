import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export interface Contact {
  id?: string;
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
  created_at?: string;
}

export interface User {
  id: string;
  email: string;
  created_at: string;
}
