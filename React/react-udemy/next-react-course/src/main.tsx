import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'

import Posts, { loader as  postsLoader } from './routes/Posts'
import NewPost, {action as actionPost} from './routes/NewPost'
import PostDetail, {loader as postDetailLoader} from './routes/PostDetail'
import RootLayout from './routes/RootLayout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {path: '/', 
        element: <Posts/>, 
        loader: postsLoader, 
        children:[
          {path: '/new-post', element: <NewPost/>, action: actionPost},
          {path: '/detail/:id', element: <PostDetail/>, loader: postDetailLoader}
        ]
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)