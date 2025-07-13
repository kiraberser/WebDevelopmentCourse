import React from "react";
import { Link } from "react-router-dom";

type Post = {
    id: number;
    title: string;
    body: string;
};

type PostsListsProps = {
    posts: Post[];
};

const PostsLists: React.FC<PostsListsProps> = ({ posts }) => {

    const postsToShow = posts.length > 9 ? posts.slice(0, 9) : posts

    return (
        <div className="py-8 px-4 bg-gray-100 min-h-screen mt-5">
            <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">Posts del Blog</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {postsToShow.map((post) => (
                    <div
                        key={post.id}
                        className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                    >
                        <div className="p-6 flex-1 flex flex-col">
                            <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                                {post.title}
                            </h2>
                            <p className="text-gray-700 flex-1 mb-4 line-clamp-4">{post.body}</p>
                            <Link to={`detail/${post.id}`} className="mt-auto flex items-center text-blue-600 group-hover:text-blue-800 transition-colors duration-300 cursor-pointer">
                                Leer más
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostsLists