// app/about/loading.js
import BlogListSkeleton from '@/app/components/BlogListSkeleton';

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">

        <BlogListSkeleton />

    </div>
  );
}
