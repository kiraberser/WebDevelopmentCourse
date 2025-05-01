import "./global.css";

import {Monsieur_La_Doulaise, Montserrat} from 'next/font/google'

import Head from "./head";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({
  weight:'400',
  subsets: ['cyrillic']
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <Head />
      <body className="min-h-screen bg-gray-100 text-gray-800">
        <Navbar/>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
