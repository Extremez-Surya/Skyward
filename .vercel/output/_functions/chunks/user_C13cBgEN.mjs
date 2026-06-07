import { s as supabase } from "./supabase__9NutBMz.mjs";
async function getUserProfile(clerkId) {
  const { data, error } = await supabase.from("users").select("*").eq("clerk_id", clerkId).single();
  if (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
  return data;
}
export {
  getUserProfile as g
};
