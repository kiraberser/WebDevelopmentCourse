import { useLoaderData } from "react-router-dom"
import PostsLists from "../components/PostsLists"

import { Outlet } from "react-router-dom"

type Post = {
  id: number
  title: string
  body: string
}

function Posts() {
  const posts = useLoaderData() as Post[]
  return (
    <>
      <Outlet />
      <main>
        <PostsLists posts={posts} />
      </main>
    </>
  )
}

export default Posts

export const loader = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return data
}