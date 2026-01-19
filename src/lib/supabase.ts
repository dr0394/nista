import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface MenuItem {
  id: string;
  category_id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  is_bestseller: boolean;
  is_vegetarian: boolean;
  is_available: boolean;
  display_order: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  display_order: number;
}

export interface Review {
  id: string;
  customer_name: string;
  rating: number;
  comment: string;
  created_at: string;
}
