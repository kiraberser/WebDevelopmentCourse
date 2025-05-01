
import "./global.css";

import { ThemeProvider } from "./contexts/ThemeContext/ThemeProvider";

import Head from "./head";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  

  return (
    <html lang="en" className="bg-white">
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
