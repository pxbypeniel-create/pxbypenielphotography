// supabase-config.js
// Replace these two strings with your real keys from Supabase Settings -> API
const SUPABASE_URL = "https://kplwvidpctgjwkxsabov.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_ggIovP3ZABeeHr-kIyUy7g_f_Vcy_4k";

// Initialize the global Supabase client instance
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
