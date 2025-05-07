'use client'

import { signup } from "@/app/actions/auth/actions"
import { useActionState, useContext } from "react" 

import {ThemeContext} from '@/app/contexts/ThemeContext/ThemeContext'

const SignupForm = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const [state, action, pending] = useActionState(signup, undefined)

  return (
    <div className={`hero min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className={`text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Sign Up</h1>
          <p className={`py-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Create your account to get started</p>
        </div>
        <div className={`card flex-shrink-0 w-full max-w-sm shadow-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-base-100'}`}>
          <form action={action} className="card-body ">
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className={`label-text ${theme === 'dark' ? 'text-gray-300' : 'text-white'}`}>Name</span>
              </label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                placeholder="Enter your name" 
                className={`input input-bordered ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : ''}`}
              />
              {state?.errors?.name && (
                <label className="label">
                  <span className="label-text-alt text-error">{state.errors.name}</span>
                </label>
              )}
            </div>

            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className={`label-text ${theme === 'dark' ? 'text-gray-300' : 'text-white'}`}>Email</span>
              </label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="Enter your email" 
                className={`input input-bordered ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : ''}`}
              />
              {state?.errors?.email && (
                <label className="label">
                  <span className="label-text-alt text-error">{state.errors.email}</span>
                </label>
              )}
            </div>

            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className={`label-text ${theme === 'dark' ? 'text-gray-300' : 'text-white'}`}>Password</span>
              </label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                placeholder="Enter your password" 
                className={`input input-bordered ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : ''}`}
              />
              {state?.errors?.password && (
                <div className="mt-2">
                  <p className="text-sm font-medium text-error">Password must:</p>
                  <ul className="list-disc list-inside text-sm text-error">
                    {state.errors.password.map((error) => (
                      <li key={error}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="form-control mt-6">
              <button 
                type="submit" 
                disabled={pending} 
                className={`btn ${theme === 'dark' ? 'btn-primary bg-blue-600 hover:bg-blue-700' : 'btn-primary'}`}
              >
                {pending ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Signing up...
                  </>
                ) : (
                  'Sign Up'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupForm