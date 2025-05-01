import Link from "next/link";

const Navbar = () => {
    return(
        <nav className="bg-white shadow-md p-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
    )
}

export default Navbar