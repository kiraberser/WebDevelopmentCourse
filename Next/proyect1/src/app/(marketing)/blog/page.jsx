import { getPosts } from "@/app/actions/blog"
import Link from "next/link"

export default async function BlogPage() {
  const posts = await getPosts()
  console.log(posts)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Link 
          href="/blog/create" 
          className="btn btn-primary"
        >
          Create New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg">No posts yet. Create your first post!</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="card bg-base-100 shadow-xl text-white">
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="line-clamp-3">{post.content}</p>
                <div className="card-actions justify-end mt-4">
                  <span className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
