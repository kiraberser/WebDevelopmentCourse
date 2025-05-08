import { getPost } from '@/actions/blog/actions'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
    const {slug} = await params
    const slugFixed = slug.replace(/%20/g, ' ')
    try {
        const post = await getPost(slugFixed)
        const ogImageUrl = `/api/og?title=${encodeURIComponent(post.title)}&date=${encodeURIComponent(new Date(post.createdAt).toLocaleDateString())}&author=${encodeURIComponent('Edwin')}`

        return {
            title: `${post.title} | Blog`,
            description: post.content.substring(0, 160),
            openGraph: {
                title: `${post.title} | Blog`,
                description: post.content.substring(0, 160),
                type: 'article',
                publishedTime: post.createdAt,
                images: [
                    {
                        url: ogImageUrl,
                        width: 1200,
                        height: 630,
                        alt: post.title
                    }
                ]
            }
        }
    } catch (error) {
        console.error('Error generating metadata:', error)
        return {
            title: 'Post no encontrado | Blog',
            description: 'El post que buscas no existe o ha sido eliminado.'
        }
    }
}

export default async function BlogPost({ params }) {
    const {slug} = await params
    const slugFixed = slug.replace(/%20/g, ' ')
    try {
        const post = await getPost(slugFixed)
        const ogImageUrl = `/api/og?title=${encodeURIComponent(post.title)}&date=${encodeURIComponent(new Date(post.createdAt).toLocaleDateString())}&author=${encodeURIComponent('Edwin')}`
        
        return (
            <div className="container mx-auto px-4 py-8">
                <Image 
                    src={ogImageUrl}
                    width={1200}
                    height={330}
                    alt={post.title}
                    className='mb-4 rounded-lg shadow-lg mx-auto'
                    priority
                />
                <article className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <div className="text-gray-600 mb-4">
                        {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                    <div className="prose lg:prose-xl">
                        {post.content}
                    </div>
                </article>
            </div>
        )
    } catch (error) {
        console.error('Error loading post:', error)
        notFound()
    }
}