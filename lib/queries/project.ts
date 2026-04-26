import { SupabaseClient } from "@supabase/supabase-js";

// 리스트 상세 조회
export const getProjectById = async (supabase: SupabaseClient, id: number) => {
  return supabase.from("project").select("*").eq("id", id).single();
};

// 리스트 조회
export const getProjectList = async (supabase: SupabaseClient) => {
  return supabase.from("project").select("*").order("id", { ascending: true });
};

// 리스트 조회수 업데이트
export const increaseProjectView = async (
  supabase: SupabaseClient,
  id: number,
) => {
  const { data, error } = await supabase
    .from("project")
    .select("views")
    .eq("id", id)
    .single();

  if (error) return { error };
  const currentViews = data?.views ?? 0; // data?.views : data가 있으면 data.views 불러오고
  // ?? 0 : ?? 앞이 null 또는 undefined면 0을 쓴다.
  return supabase
    .from("project")
    .update({ views: currentViews + 1 })
    .eq("id", id);
};
