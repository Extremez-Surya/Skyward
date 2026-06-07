import{s as n}from"./supabase.DbPjWakc.js";async function a(t){const{data:r,error:e}=await n.from("deployments").select(`
      *,
      candidates:candidate_id (
        id,
        full_name,
        phone
      )
    `).eq("client_id",t).eq("status","active");return e?(console.error("Error fetching workforce:",e),[]):r}async function o(t){const{data:r,error:e}=await n.from("job_requirements").insert([t]).select().single();if(e)throw e;return r}async function i(t){const{data:r,error:e}=await n.from("replacement_requests").insert([t]).select().single();if(e)throw e;return r}export{o as a,a as g,i as s};
