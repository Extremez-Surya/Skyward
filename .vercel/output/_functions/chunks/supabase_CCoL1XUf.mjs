import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gifxagwfykyrhzdlirud.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpZnhhZ3dmeWt5cmh6ZGxpcnVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4MjE4NjQsImV4cCI6MjA5NjM5Nzg2NH0.usZF4YnReEOvnHEQuTDbofs49-5F0A9GMbVShVA-Ca4";
const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
export {
  supabase as s
};
