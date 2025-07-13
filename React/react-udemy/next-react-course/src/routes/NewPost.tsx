import Modal from "../components/Modal"
import { Form, redirect } from "react-router-dom"

const NewPost = () => {
    return (
        <>
            <Modal>
                <Form method="post" className="flex flex-col gap-4 p-4">
                    <label className="font-semibold text-gray-700">
                        Título
                        <input
                            type="text"
                            name="title"
                            className="mt-1 p-2 border rounded w-full"
                            required
                        />
                    </label>
                    <label className="font-semibold text-gray-700">
                        Contenido
                        <input
                            type="text"
                            name="content"
                            className="mt-1 p-2 border rounded w-full"
                            required
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                    >
                        Crear Post
                    </button>
                </Form>
            </Modal>
        </>
    )
}

export default NewPost

//el request viene del form mendiante los name
export const action = async ({request}) => {
    const formData = await request.formData()
    const postData = Object.fromEntries(formData)
    await fetch('url',{
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    } )
    return redirect('/')
}