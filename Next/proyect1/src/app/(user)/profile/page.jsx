import { cookies } from "next/headers"
import { decrypt } from "@/lib/session"
import { logout } from "@/actions/auth"

const ProfilePage = async () => {
    const cookieStore = await cookies()
    const session = cookieStore.get('session')
    
    let userId = null
    let name = ''
    if (session) {
        const payload = await decrypt(session.value)
        userId = payload?.userId
        name = payload?.name
    }

    return (
        <div className="h-screen mt-20">
            <h1 className="text-2xl font-bold">Perfil</h1>
            <p className="">
                {userId ? `ID de Usuario: ${userId}` : 'No has iniciado sesión'}
            </p>
            <button className="btn btn-secondary" onClick={logout}>Log out</button>
        </div>
    )
}

export default ProfilePage