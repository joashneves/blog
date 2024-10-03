import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import './index.css'
import HomeSite from './routes/HomeSite.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeSite/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
