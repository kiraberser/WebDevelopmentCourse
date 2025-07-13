import { useLoaderData } from "react-router-dom"
import Modal from "../components/Modal"

const PostDetail = () => {
    const post = useLoaderData()
    return(
        <>
            <Modal>
                <h1 className="text-2xl font-bold">{post.title}</h1>
                <h1 className="text-gray-600 pt-5">{post.body}</h1>

            </Modal>
        </>
    )

}

export default PostDetail

export const loader = async ({ params }) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id)
    console.log(response)
    const data = await response.json()
    return data
}