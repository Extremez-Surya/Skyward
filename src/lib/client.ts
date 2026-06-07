import { supabase } from './supabase';

export async function getClientProfile(clerkId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*, clients(*)')
    .eq('clerk_id', clerkId)
    .single();

  if (error || !data.clients || data.clients.length === 0) {
    console.error('Error fetching client profile:', error);
    return null;
  }

  return { ...data, ...data.clients[0] };
}

export async function getClientWorkforce(clientId: string) {
  const { data, error } = await supabase
    .from('deployments')
    .select(`
      *,
      candidates:candidate_id (
        id,
        full_name,
        phone
      )
    `)
    .eq('client_id', clientId)
    .eq('status', 'active');

  if (error) {
    console.error('Error fetching workforce:', error);
    return [];
  }

  return data;
}

export async function getClientAttendance(clientId: string, date?: string) {
  const queryDate = date || new Date().toISOString().split('T')[0];
  
  const { data, error } = await supabase
    .from('attendance')
    .select(`
      *,
      deployments!inner (
        client_id,
        role,
        candidates:candidate_id (
          full_name
        )
      )
    `)
    .eq('deployments.client_id', clientId)
    .eq('attendance_date', queryDate);

  if (error) {
    console.error('Error fetching attendance:', error);
    return [];
  }

  return data;
}

export async function submitJobRequirement(requirement: any) {
  const { data, error } = await supabase
    .from('job_requirements')
    .insert([requirement])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getClientRequirements(clientId: string) {
  const { data, error } = await supabase
    .from('job_requirements')
    .select('*')
    .eq('client_id', clientId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching requirements:', error);
    return [];
  }

  return data;
}

export async function submitReplacementRequest(request: any) {
  const { data, error } = await supabase
    .from('replacement_requests')
    .insert([request])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getClientReplacementRequests(clientId: string) {
  const { data, error } = await supabase
    .from('replacement_requests')
    .select(`
      *,
      deployments:deployment_id (
        role,
        candidates:candidate_id (
          full_name
        )
      )
    `)
    .eq('client_id', clientId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching replacement requests:', error);
    return [];
  }

  return data;
}
