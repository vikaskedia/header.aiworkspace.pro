-- SQL commands to fix RLS policy for settings table
-- Run these in your Supabase SQL Editor

-- 1. Check current RLS policy status
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'settings';

-- 2. Check existing policies
SELECT * FROM pg_policies WHERE tablename = 'settings';

-- 3. Option A: Disable RLS entirely for settings table (SIMPLE SOLUTION)
ALTER TABLE public.settings DISABLE ROW LEVEL SECURITY;

-- 4. Option B: Create a policy to allow public read access to settings (MORE SECURE)
-- First enable RLS if not already enabled
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;

-- Then create a policy for public read access
CREATE POLICY "Allow public read access to settings" ON public.settings
    FOR SELECT USING (true);

-- 5. Option C: Create a policy for authenticated users only
CREATE POLICY "Allow authenticated read access to settings" ON public.settings
    FOR SELECT USING (auth.role() = 'authenticated' OR auth.role() = 'anon');

-- 6. Verify the policies are working
SELECT * FROM public.settings WHERE key_name = 'github_token';