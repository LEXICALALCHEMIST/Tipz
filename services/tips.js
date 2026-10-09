import { supabase } from './supabase';

export async function listTips() {
  const { data, error } = await supabase
    .from('tips')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function createTip(tip) {
  const { data, error } = await supabase
    .from('tips')
    .insert({
      ticker: tip.ticker,
      body: tip.body,
      price: tip.price,
      at: tip.at,
      email: tip.email,
    })
    .select()
    .single();
  if (error) throw error;
  return data;
}