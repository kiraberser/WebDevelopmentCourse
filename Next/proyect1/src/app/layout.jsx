import "./global.css";

import { Inter } from "next/font/google";

import { ThemeProvider } from "./contexts/ThemeContext/ThemeProvider";
import Head from "./head";
import Navbar from "./components/Navbar";

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'], // Puedes incluir varios pesos
  })

export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    title: {
        default: 'Blog de Edwin',
        template: '%s | Mi Blog'
    },
    description: 'Un blog creado por Edwin con Nextjs',
    openGraph: {
        type: 'website',
        locale: 'es_ES',
        url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
        siteName: 'Mi Blog'
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.className} bg-white`}>
            <Head />
            <body className="min-h-screen">
                <ThemeProvider>
                    <Navbar/>
                    <main className="p-6">{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
} 