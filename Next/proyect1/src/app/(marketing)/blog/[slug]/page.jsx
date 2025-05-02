'use client'

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const BlogPost = () => {
    const [post, setPost] = useState(null)
    const params = useParams()
    
    useEffect(() => {
        const fetchPosts = () => {
            const storedPosts = localStorage.getItem('posts')
            if (storedPosts) {
                const posts = JSON.parse(storedPosts)
                const postFixed = params.slug.replace(/%20/g, ' ')
                const foundPost = posts.find(p => p.title === postFixed)
                setPost(foundPost)
            }
        }
        fetchPosts()
    }, [params.slug])
    
    if (!post) {
        return(
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold">Post no encontrado</h1>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <article className="max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
                <div className="text-gray-600 mb-4">
                    {new Date(post.createdAt).toLocaleDateString()}
                </div>
                <div className="prose lg:prose-xl">
                    {post.content}
                </div>
            </article>
        </div>
    )
}

export default BlogPost