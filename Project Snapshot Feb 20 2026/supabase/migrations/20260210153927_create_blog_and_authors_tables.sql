/*
  # Create Blog and Authors Tables

  ## Tables Created
  
  ### authors
  - `id` (uuid, primary key) - Unique identifier for each author
  - `name` (text) - Full name of the author
  - `title` (text) - Job title/position (e.g., "CMO")
  - `bio` (text) - Author biography
  - `image_url` (text) - URL to author's profile image
  - `email` (text, optional) - Contact email
  - `social_links` (jsonb, optional) - Social media links as JSON object
  - `slug` (text, unique) - URL-friendly identifier for author pages
  - `created_at` (timestamptz) - When the author was created
  - `updated_at` (timestamptz) - Last update timestamp

  ### blog_posts
  - `id` (uuid, primary key) - Unique identifier for each blog post
  - `title` (text) - Post title
  - `slug` (text, unique) - URL-friendly identifier for SEO
  - `content` (text) - Full HTML content of the post
  - `preview` (text) - Short preview/excerpt
  - `image_url` (text) - Featured image URL
  - `author_id` (uuid, foreign key) - References authors table
  - `published_date` (date) - Publication date
  - `meta_description` (text, optional) - SEO meta description
  - `meta_keywords` (text, optional) - SEO keywords
  - `read_time_minutes` (integer) - Estimated read time
  - `created_at` (timestamptz) - When the post was created
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  - Enable RLS on both tables
  - Allow public read access (SELECT) for both tables
  - Restrict write operations to authenticated users only

  ## Indexes
  - Index on blog_posts.slug for fast lookups
  - Index on blog_posts.author_id for author filtering
  - Index on authors.slug for author page lookups
*/

-- Create authors table
CREATE TABLE IF NOT EXISTS authors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text NOT NULL,
  bio text NOT NULL,
  image_url text NOT NULL,
  email text,
  social_links jsonb DEFAULT '{}'::jsonb,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  preview text NOT NULL,
  image_url text NOT NULL,
  author_id uuid NOT NULL REFERENCES authors(id) ON DELETE CASCADE,
  published_date date NOT NULL,
  meta_description text,
  meta_keywords text,
  read_time_minutes integer DEFAULT 5,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author_id ON blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_authors_slug ON authors(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_date ON blog_posts(published_date DESC);

-- Enable Row Level Security
ALTER TABLE authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for authors table
CREATE POLICY "Anyone can view authors"
  ON authors FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Only authenticated users can insert authors"
  ON authors FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can update authors"
  ON authors FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can delete authors"
  ON authors FOR DELETE
  TO authenticated
  USING (true);

-- Create policies for blog_posts table
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Only authenticated users can insert blog posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can update blog posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can delete blog posts"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (true);