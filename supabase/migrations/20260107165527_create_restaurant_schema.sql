/*
  # Restaurant Database Schema for Nista's Schnitzelhaus

  ## Overview
  This migration creates the core database structure for a restaurant website including
  menu management, orders, reservations, and customer reviews.

  ## New Tables
  
  ### 1. menu_categories
  - `id` (uuid, primary key)
  - `name` (text) - Category name (e.g., "Schnitzel", "Burger", "Beilagen")
  - `description` (text) - Category description
  - `display_order` (integer) - Order for display
  - `created_at` (timestamptz)
  
  ### 2. menu_items
  - `id` (uuid, primary key)
  - `category_id` (uuid, foreign key to menu_categories)
  - `name` (text) - Item name
  - `description` (text) - Item description
  - `price` (decimal) - Price in EUR
  - `image_url` (text) - URL to item image
  - `is_bestseller` (boolean) - Mark as bestseller
  - `is_vegetarian` (boolean) - Vegetarian option
  - `is_available` (boolean) - Currently available
  - `display_order` (integer) - Order for display
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### 3. orders
  - `id` (uuid, primary key)
  - `customer_name` (text) - Customer name
  - `customer_phone` (text) - Phone number
  - `customer_email` (text) - Email address
  - `delivery_type` (text) - 'delivery' or 'pickup'
  - `delivery_address` (text) - Delivery address
  - `order_items` (jsonb) - Array of ordered items with quantities
  - `total_amount` (decimal) - Total order amount
  - `special_requests` (text) - Special instructions
  - `status` (text) - Order status: 'pending', 'confirmed', 'preparing', 'ready', 'completed', 'cancelled'
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### 4. reservations
  - `id` (uuid, primary key)
  - `customer_name` (text) - Customer name
  - `customer_phone` (text) - Phone number
  - `customer_email` (text) - Email address
  - `reservation_date` (date) - Reservation date
  - `reservation_time` (time) - Reservation time
  - `number_of_guests` (integer) - Number of people
  - `special_requests` (text) - Special requests
  - `status` (text) - Status: 'pending', 'confirmed', 'cancelled', 'completed'
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### 5. reviews
  - `id` (uuid, primary key)
  - `customer_name` (text) - Customer name
  - `rating` (integer) - Rating 1-5
  - `comment` (text) - Review text
  - `is_approved` (boolean) - Moderation flag
  - `created_at` (timestamptz)
  
  ### 6. newsletter_subscribers
  - `id` (uuid, primary key)
  - `email` (text, unique) - Email address
  - `subscribed_at` (timestamptz)
  - `is_active` (boolean) - Subscription status

  ## Security
  - Enable RLS on all tables
  - Public read access for menu items and approved reviews
  - No direct write access from client (orders/reservations through Edge Functions)
*/

-- Create menu_categories table
CREATE TABLE IF NOT EXISTS menu_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text DEFAULT '',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view menu categories"
  ON menu_categories FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create menu_items table
CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES menu_categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text DEFAULT '',
  price decimal(10,2) NOT NULL,
  image_url text DEFAULT '',
  is_bestseller boolean DEFAULT false,
  is_vegetarian boolean DEFAULT false,
  is_available boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view available menu items"
  ON menu_items FOR SELECT
  TO anon, authenticated
  USING (is_available = true);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  customer_email text DEFAULT '',
  delivery_type text NOT NULL CHECK (delivery_type IN ('delivery', 'pickup')),
  delivery_address text DEFAULT '',
  order_items jsonb NOT NULL DEFAULT '[]',
  total_amount decimal(10,2) DEFAULT 0,
  special_requests text DEFAULT '',
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'preparing', 'ready', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No direct access to orders"
  ON orders FOR ALL
  TO anon, authenticated
  USING (false);

-- Create reservations table
CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  customer_email text DEFAULT '',
  reservation_date date NOT NULL,
  reservation_time time NOT NULL,
  number_of_guests integer NOT NULL CHECK (number_of_guests > 0),
  special_requests text DEFAULT '',
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No direct access to reservations"
  ON reservations FOR ALL
  TO anon, authenticated
  USING (false);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text DEFAULT '',
  is_approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view approved reviews"
  ON reviews FOR SELECT
  TO anon, authenticated
  USING (is_approved = true);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No direct access to newsletter subscribers"
  ON newsletter_subscribers FOR ALL
  TO anon, authenticated
  USING (false);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_menu_items_category ON menu_items(category_id);
CREATE INDEX IF NOT EXISTS idx_menu_items_bestseller ON menu_items(is_bestseller) WHERE is_bestseller = true;
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_reservations_date ON reservations(reservation_date);
CREATE INDEX IF NOT EXISTS idx_reviews_approved ON reviews(is_approved) WHERE is_approved = true;