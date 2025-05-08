import { cookies } from 'next/headers'
import { decrypt } from '@/lib/session'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get('session')
    
    if (!session) {
      return Response.json({ error: 'No session found' }, { status: 401 })
    }

    const payload = await decrypt(session.value)
    
    if (!payload) {
      return Response.json({ error: 'Invalid session' }, { status: 401 })
    }

    return Response.json({ 
      userId: payload.userId,
      name: payload.name
    })
  } catch (error) {
    console.error('Error in user API:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
} 