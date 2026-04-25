import { SupabaseClient } from "@supabase/supabase-js";

export const getProjectById = async (supabase: SupabaseClient, id: number) => {
  return supabase.from("project").select("*").eq("id", id).single();
};

export const getProjectList = async (supabase: SupabaseClient) => {
  return supabase.from("project").select("*");
};
