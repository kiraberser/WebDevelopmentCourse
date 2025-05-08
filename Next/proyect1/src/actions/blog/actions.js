'use server'

// Simularemos una base de datos simple con un array en memoria
let posts = [];

export async function createPost(prevState, formData) {
    try {
        const title = formData.get('title')
        const content = formData.get('content')
        
        // Validación básica
        if (!title || !content) {
            return {
                success: false,
                message: 'Title and content are required'
            }
        }

        // Crear nuevo post
        const newPost = {
            id: Date.now(),
            title,
            content,
            createdAt: new Date().toISOString()
        }

        // Agregar a nuestro array de posts
        posts.push(newPost)

        return { 
            success: true, 
            message: 'Post created successfully',
            post: newPost 
        }
    } catch (error) {
        return {
            success: false,
            message: 'Error creating post: ' + error.message
        }
    }
}

export async function getPosts() {
    return posts
}

export async function getPost(slug) {
    try {
        // Decodificar el slug para manejar caracteres especiales
        const decodedSlug = decodeURIComponent(slug)
        
        // Buscar el post por título, ignorando mayúsculas/minúsculas
        const post = posts.find(p => 
            p.title.toLowerCase() === decodedSlug.toLowerCase()
        )
        
        if (!post) {
            console.log('Posts disponibles:', posts.map(p => p.title))
            console.log('Slug buscado:', decodedSlug)
            throw new Error('Post not found')
        }

        return post
    } catch (error) {
        console.error('Error fetching post:', error)
        throw error
    }
} 