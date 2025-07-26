'use client';

import { auth } from '@/actions/auth-actions';
import Link from 'next/link';

import {useActionState} from 'react'

export default function AuthForm({mode}) {
  const [formState, formAction] = useActionState(auth.bind(null, mode), {errors: null})
  
  return (
    <form id="auth-form" >
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      <p>
        {formState.errors && (
          <ul id='form-errors'>
            {Object.keys(formState.errors).map((error) => (
              <li key={error}>{formState.errors[error]}</li>
            ))}
          </ul>)}
        <button type="submit" formAction={formAction}>
          {mode === 'login' ? 'Login' : 'Create Account'}
        </button>
      </p>
      <p>
        {mode === 'login' && <Link href="/?mode=signup">Create an Account.</Link>}
        {mode === 'signup' && <Link href="/?mode=login">Login with existing account.</Link>}
      </p>
    </form>
  );
}
