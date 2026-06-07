import { supabase } from './supabase';

export async function getUserProfile(clerkId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('clerk_id', clerkId)
    .single();

  if (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }

  return data;
}

export async function getCandidateProfile(clerkId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*, candidates(*)')
    .eq('clerk_id', clerkId)
    .single();

  if (error || !data.candidates || data.candidates.length === 0) {
    console.error('Error fetching candidate profile:', error);
    return null;
  }

  return { ...data, ...data.candidates[0] };
}
