import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-blue-600 px-4 py-3 flex items-center justify-between fixed w-full">
            <div className="text-white font-bold text-xl">
                Mi Blog
            </div>
            <div className="space-x-4">
                <Link to="/new-post" className="text-white hover:text-blue-200 transition">Nuevo Post</Link>
            </div>
        </nav>
    )
}

export default Navbar