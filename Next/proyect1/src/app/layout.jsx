import "./global.css";

import { Inter } from "next/font/google";

import { WebVitals } from "../components/web-vitals";

import { ThemeProvider } from "../contexts/ThemeContext/ThemeProvider";
import Head from "./head";
import Navbar from "../components/Navbar";

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
        <html lang="en" className={inter.className}>
            <Head />
            <body className="min-h-screen">
                <WebVitals/>
                <ThemeProvider>
                    <Navbar/>
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
} 