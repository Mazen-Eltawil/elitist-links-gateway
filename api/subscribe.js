import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { email } = request.body;

    if (!email) {
      return response.status(400).json({ error: 'Email is required' });
    }

    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email: email }])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return response.status(500).json({ error: error.message });
    }

    return response.status(200).json({ message: 'Success!', data });
  } catch (err) {
    console.error('Server error:', err);
    return response.status(500).json({ error: 'Something went wrong.' });
  }
} 