export const getPost = async (supabase, id) => {
  return supabase.from('project').select('*').eq('id', id).single()
}