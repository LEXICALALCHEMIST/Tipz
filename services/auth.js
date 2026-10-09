import { supabase } from './supabase';

export async function signUp({ email, username, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { username } },
  });
  if (error) throw error;
  return { id: data.user.id, email, username };
}

export async function signIn({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('username, email')
    .eq('id', data.user.id)
    .single();
  if (profileError) throw profileError;
  return { id: data.user.id, email: profile.email, username: profile.username };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}