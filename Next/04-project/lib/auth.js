// auth.js
import crypto from 'crypto';
import { cookies } from 'next/headers';
import db from './db.js';
import { setUserSession, getUserSession } from './session.js';

export async function createAuthSession(userId) {
  const sessionDurationMs = 1000 * 60 * 60 * 24 * 30;
  const sessionId = crypto.randomBytes(25).toString('base64url');
  const expiresAt = new Date(Date.now() + sessionDurationMs);
  const cookieStore = await cookies();

  cookieStore.set('auth_session', sessionId, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    expires: expiresAt,
    secure: process.env.NODE_ENV === 'production',
  });

  await setUserSession(userId, sessionId, expiresAt);
}

export async function verifyAuth() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('auth_session');
  if (!sessionCookie) {
    return { user: null, session: null };
  }

  try {
    const session = await getUserSession(sessionCookie.value);
    if (!session) return { user: null, session: null };
    return { user: session.user, session: session };
  } catch (error) {
    console.error('Error fetching session:', error);
    return { user: null, session: null };
  }
}

export async function destroyAuthSession() {
  const { user } = await verifyAuth();
  if (!user) return {
    error: 'Unauthorized'
  };

  const cookieStore = await cookies();
  cookieStore.delete('auth_session');
}