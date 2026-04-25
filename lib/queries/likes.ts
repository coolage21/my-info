export const toggleLike = async (supabase, postId, userId) => {
  const { data } = await supabase
    .from('post_likes')
    .select('*')
    .eq('post_id', postId)
    .eq('user_id', userId)
    .single()

  if (data) {
    return supabase
      .from('post_likes')
      .delete()
      .eq('post_id', postId)
      .eq('user_id', userId)
  }

  return supabase.from('post_likes').insert({ post_id: postId, user_id: userId })
}