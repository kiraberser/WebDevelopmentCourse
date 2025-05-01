const BlogListSkeleton = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="card w-full bg-white shadow-xl">
          <div className="skeleton h-48 w-full bg-gray-200 animate-pulse"></div>
          <div className="card-body">
            <div className="skeleton h-6 w-3/4 bg-gray-200 animate-pulse"></div>
            <div className="skeleton h-4 w-1/4 mt-2 bg-gray-200 animate-pulse"></div>
            <div className="skeleton h-4 w-full mt-2 bg-gray-200 animate-pulse"></div>
            <div className="skeleton h-4 w-2/3 mt-2 bg-gray-200 animate-pulse"></div>
            <div className="flex justify-between items-center mt-4">
              <div className="skeleton h-8 w-24 bg-gray-200 animate-pulse"></div>
              <div className="skeleton h-8 w-24 bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogListSkeleton