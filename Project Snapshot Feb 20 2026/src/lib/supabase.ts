import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Author {
  id: string;
  name: string;
  title: string;
  bio: string;
  image_url: string;
  email?: string;
  social_links?: Record<string, string>;
  slug: string;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  preview: string;
  image_url: string;
  author_id: string;
  published_date: string;
  meta_description?: string;
  meta_keywords?: string;
  read_time_minutes: number;
  created_at: string;
  updated_at: string;
  author?: Author;
}
