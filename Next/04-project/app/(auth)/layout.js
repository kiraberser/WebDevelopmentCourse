import '../globals.css';
import { destroyAuthSession } from "@/lib/auth"

import { logout } from '@/actions/auth-actions';
import redirect from 'next/navigation'

export const metadata = {
  title: 'Next Auth',
  description: 'Next.js Authentication',
};

export default function AuthLayout({ children }) {

  return (
    <>
        <header id='auth-header'>
            <p>Welcome back!</p>
            <form action={logout}>
                <button type='submit'>Logout</button>
            </form>
        </header>
        {children}
    </>
  );
}
