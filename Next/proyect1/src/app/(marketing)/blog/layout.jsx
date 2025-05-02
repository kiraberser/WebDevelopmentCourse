import { Metadata } from 'next'

export const metadata = {
    title: 'Blog',
    description: 'Explora nuestros artículos y posts más recientes',
}

export default function BlogLayout({ children }) {
    return (
        <div className="min-h-screen">
            <main className="container mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    )
}
  