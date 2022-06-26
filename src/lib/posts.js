export async function getAllPostIds() {
  const res = await fetch(`http://localhost:4200/posts`)
  const posts = await res.json()
  return posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    }
  })
}
