import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import './index.css'
import HomeSite from './routes/HomeSite.tsx'
import PostSite from './routes/PostSite.tsx'
import ProjectSite from './routes/ProjectSite.tsx'
import ContatoSite from './routes/ContatoSite.tsx'
import Postagem from './components/pages/Postagem/Postagem.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeSite/>,
  },
  {
    path: "/Post",
    element: <PostSite/>,
  },
  {
    path: "/Postagem/:id",
    element: <Postagem/>,
  },
  {
    path: "/Project",
    element: <ProjectSite/>,
  },
  {
    path: "/Contato",
    element: <ContatoSite/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
