export const addView = (supabase, projectId) => {
  return supabase.from('project_views').insert({
    project_id: projectId,
    // user_id: userId
  })
}