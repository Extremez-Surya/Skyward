import { Webhook } from 'svix';
import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
  const WEBHOOK_SECRET = import.meta.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    return new Response('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env', {
      status: 400,
    });
  }

  // Get the headers
  const svix_id = request.headers.get('svix-id');
  const svix_timestamp = request.headers.get('svix-timestamp');
  const svix_signature = request.headers.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    });
  }

  // Get the body
  const payload = await request.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: any;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    });
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400,
    });
  }

  const { id } = evt.data;
  const eventType = evt.type;

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { first_name, last_name, email_addresses, phone_numbers, public_metadata } = evt.data;
    const email = email_addresses[0]?.email_address;
    const phone = phone_numbers[0]?.phone_number;
    const full_name = `${first_name} ${last_name}`.trim();
    const role = public_metadata?.role || 'candidate'; // Default role

    const { error } = await supabase
      .from('users')
      .upsert({
        clerk_id: id,
        full_name,
        email,
        phone,
        role,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'clerk_id' });

    if (error) {
      console.error('Error syncing user to Supabase:', error);
      return new Response('Error syncing user', { status: 500 });
    }
  }

  return new Response('', { status: 200 });
};
