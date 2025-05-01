'use client'

import { createPost } from "@/app/actions/blog"
import { useActionState } from "react"
import { redirect } from "next/navigation"

const initialState = {
  message: '',
  success: false
}

export default function CreatePostPage() {
  const [state, formAction, pending] = useActionState(createPost, initialState)

  // Efecto para redirigir después de un post exitoso
  if (state?.success) {
    redirect('/blog')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Create New Post</h1>
          <button 
            onClick={() => redirect('/blog')} 
            className="btn btn-ghost"
          >
            Back
          </button>
        </div>

        {state?.message && ( //control the error
          <div className="alert alert-error mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{state.message}</span>
          </div>
        )}

        <form action={formAction} className="space-y-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg">Title</span>
            </label>
            <input 
              type="text" 
              name="title" 
              placeholder="Enter post title" 
              className="input input-bordered w-full text-white" 
              required
              minLength={3}
              maxLength={100}
            />
          </div>
          
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg">Content</span>
            </label>
            <hr/>
            <textarea 
              name="content" 
              placeholder="Write your post content here..." 
              className="textarea textarea-bordered h-32 text-white" 
              required
              minLength={10}
              maxLength={1000}
            ></textarea>
          </div>

          <div className="form-control">
            <button 
              type="submit" 
              className="btn btn-primary w-full md:w-auto"
              disabled={pending}
            >
              {pending ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Creating...
                </>
              ) : (
                'Create Post'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}