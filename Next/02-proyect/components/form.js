'use client'

import { useFormState } from "react-dom";
import { FormSubmit } from "@/components/form-submit";

export const Form = ({action}) => {
    const [actionState, setActionState] = useFormState(action, {});

    return (
        <>
            <h1>Create a new post</h1>
            <form action={setActionState}>
                <p className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title"  />
                </p>
                <p className="form-control">
                    <label htmlFor="image">Image URL</label>
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        id="image"
                        name="image"
                    />
                </p>
                <p className="form-control">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" name="content" rows="5"  />
                </p>
                <p className="form-actions">
                    <FormSubmit />
                </p>
                {actionState.errors && (<ul className="form-errors">
                    {actionState.errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>)}
            </form>
        </>
    )
}