import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Home.tsx'
import Laughter from './Laughter.tsx'
import Inkadot from './Inkadot.tsx'
import About from './About.tsx'
import Treeative from './Treeative.tsx'
import Media from './Media.tsx'

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/Laughter",
        Component: Laughter
      },
      {
        path: "/Inkadot",
        Component: Inkadot
      }
      ,
      {
        path: "/About",
        Component: About
      },
      {
        path: "/Treeative",
        Component: Treeative
      }
      ,
      {
        path: "/Media",
        Component: Media
      }
    ]
}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
