import { createClient } from "@supabase/supabase-js";
const supabaseUrl = void 0;
const supabaseKey = void 0;
const supabase = createClient(supabaseUrl, supabaseKey);
export {
  supabase as s
};
