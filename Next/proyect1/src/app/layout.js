import Link from "next/link";
import Head from "./head";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className="min-h-screen bg-gray-100 text-gray-800">
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
          </ul>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
