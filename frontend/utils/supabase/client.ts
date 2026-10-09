import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://nibqxgygjzilojvvsayc.supabase.co";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pYnF4Z3lnanppbG9qdnZzYXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzOTg4MDcsImV4cCI6MjEwNTk3NDgwN30.KQpaLb0aXqMs07ZSDFYRx_7mQxHE8V04-FzmwbKNYt4";

export const createClient = () =>
  createBrowserClient(
    supabaseUrl!,
    supabaseKey!,
  );
