'use client'

import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';
import { togglePostLikeStatus } from '@/actions/createPost';
import { useOptimistic } from 'react';

function Post({ post, action }) {
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form 
            // bind sirve para predefinir argumentos para una funcion, el primer argumento es null 
            // porque no se necesita ele estado previo, el segundo es el id del post
              action={action.bind(null, post.id)} 
              className={post.isLiked ? 'liked' : ''}
            >

              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
  // useOptimistic permite optimizar el renderizado de los posts
  const [optimisticPost, setOptimisticPost ] = useOptimistic(posts,(prevPosts, editPostId) => {
    const findPost = prevPosts.findIndex(post => post.id === editPostId)

    if (findPost === -1) {
      return prevPosts
    }

    const editPost = {...prevPosts[findPost]}
    editPost.likes = editPost.likes + (editPost.isLiked ? -1 : 1)
    editPost.isLiked = !editPost.isLiked
    const newPost = [...prevPosts]
    newPost[findPost] = editPost
    return newPost;
  })
  if (!optimisticPost || optimisticPost.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  const optimisticAction = async (postId) => {
    setOptimisticPost(postId)
    await togglePostLikeStatus(postId)
  }

  return (
    <ul className="posts">
      {optimisticPost.map((post) => (
        <li key={post.id}>
          <Post post={post} action={optimisticAction}/>
        </li>
      ))}
    </ul>
  );
}
