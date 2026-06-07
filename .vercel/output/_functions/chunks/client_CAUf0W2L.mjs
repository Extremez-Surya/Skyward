import { s as supabase } from "./supabase_CCoL1XUf.mjs";
async function getClientProfile(clerkId) {
  const { data, error } = await supabase.from("users").select("*, clients(*)").eq("clerk_id", clerkId).single();
  if (error || !data.clients || data.clients.length === 0) {
    console.error("Error fetching client profile:", error);
    return null;
  }
  return { ...data, ...data.clients[0] };
}
async function getClientWorkforce(clientId) {
  const { data, error } = await supabase.from("deployments").select(`
      *,
      candidates:candidate_id (
        id,
        full_name,
        phone
      )
    `).eq("client_id", clientId).eq("status", "active");
  if (error) {
    console.error("Error fetching workforce:", error);
    return [];
  }
  return data;
}
async function getClientAttendance(clientId, date) {
  const queryDate = date || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const { data, error } = await supabase.from("attendance").select(`
      *,
      deployments!inner (
        client_id,
        role,
        candidates:candidate_id (
          full_name
        )
      )
    `).eq("deployments.client_id", clientId).eq("attendance_date", queryDate);
  if (error) {
    console.error("Error fetching attendance:", error);
    return [];
  }
  return data;
}
async function submitJobRequirement(requirement) {
  const { data, error } = await supabase.from("job_requirements").insert([requirement]).select().single();
  if (error) throw error;
  return data;
}
async function getClientRequirements(clientId) {
  const { data, error } = await supabase.from("job_requirements").select("*").eq("client_id", clientId).order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching requirements:", error);
    return [];
  }
  return data;
}
async function submitReplacementRequest(request) {
  const { data, error } = await supabase.from("replacement_requests").insert([request]).select().single();
  if (error) throw error;
  return data;
}
async function getClientReplacementRequests(clientId) {
  const { data, error } = await supabase.from("replacement_requests").select(`
      *,
      deployments:deployment_id (
        role,
        candidates:candidate_id (
          full_name
        )
      )
    `).eq("client_id", clientId).order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching replacement requests:", error);
    return [];
  }
  return data;
}
export {
  getClientAttendance as a,
  getClientWorkforce as b,
  submitReplacementRequest as c,
  getClientRequirements as d,
  getClientReplacementRequests as e,
  getClientProfile as g,
  submitJobRequirement as s
};
