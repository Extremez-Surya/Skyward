import { s as supabase } from "./supabase_BQIL2gf4.mjs";
async function getUserProfile(clerkId) {
  const { data, error } = await supabase.from("users").select("*").eq("clerk_id", clerkId).single();
  if (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
  return data;
}
async function getCandidateProfile(clerkId) {
  const { data, error } = await supabase.from("users").select("*, candidates(*)").eq("clerk_id", clerkId).single();
  if (error || !data.candidates || data.candidates.length === 0) {
    console.error("Error fetching candidate profile:", error);
    return null;
  }
  return { ...data, ...data.candidates[0] };
}
export {
  getCandidateProfile as a,
  getUserProfile as g
};
