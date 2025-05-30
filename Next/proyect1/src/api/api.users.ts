
const getUserById = async (id: string) => {
    const response = await fetch(`http://localhost:8000/api/users/detail-user/${id}`)
    const data = await response.json()
    
    return data
}

interface User {
    id?: string
    name: string
    email: string
    password: string
}


export { getUserById }



