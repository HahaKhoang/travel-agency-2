import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lhxnyafaldsdteqwknyq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoeG55YWZhbGRzZHRlcXdrbnlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxMjAxMzcsImV4cCI6MjAwNzY5NjEzN30.VaqqiJNi8PYxBZgOrRGKeYl256j0F9IB5byCxYb3nBQ";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
