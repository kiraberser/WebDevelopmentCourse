export const metadata = {
    title: "Blog",
    description: "Mira todos nuestros posts publicados.",
  };
  
  export default function BlogLayout({ children }) {
    return (
        <div className="container mx-auto p-6">
          {children}
        </div>
    );
  }
  