
interface Blog {
    id: string
    title: string
    content: string
    author: string
    created_at: string
    image: File
}

const getBlog = async () => {
    const response = await fetch('http://localhost:8000/api/blog/')
    const data = await response.json()
    return data
}
const getBlogById = async (id: string) => {
    const response = await fetch(`http://localhost:8000/api/blog/${id}`)
    const data = await response.json()
    return data
}

const createBlog = async (blog: Blog) => {
    const response = await fetch('http://localhost:8000/api/blog/', {
        method: 'POST',
        body: JSON.stringify(blog),
    })
}

const updateBlog = async (id: string, blog: Blog) => {
    const response = await fetch(`http://localhost:8000/api/blog/${id}`, {
        method: 'PUT',
        body: JSON.stringify(blog),
    })
}

const deleteBlog = async (id: string) => {
    const response = await fetch(`http://localhost:8000/api/blog/${id}`, {
        method: 'DELETE',
    })
}

export { getBlog, getBlogById, createBlog, updateBlog, deleteBlog } 
