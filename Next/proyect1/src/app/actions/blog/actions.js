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