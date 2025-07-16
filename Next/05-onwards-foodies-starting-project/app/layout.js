import Navbar from '@/components/navbar/Navbar';
import NavbarBackground from '@/components/navbar/NavbarBackground';
import './globals.css';


export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarBackground/>        
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
