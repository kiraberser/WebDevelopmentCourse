
export const metadata = {
  title: "About Us",
  description: "Learn more about our company, mission, and values.",
};

export default function AboutLayout({ children }) {
  return (
      <div className="container mx-auto p-6">
        {children}
      </div>
  );
}
