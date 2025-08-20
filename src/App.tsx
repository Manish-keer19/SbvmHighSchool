


import HomePage from './Homepage'
import FacilitiesPage from './FacilitiesPage'
import AboutPage from './About'
import GalleryContactPage from './GallaryImage'

import { createBrowserRouter, RouterProvider } from 'react-router'

import ContactPage from './Contact'


const router = createBrowserRouter([
  {
    path: '/',
    element:<HomePage/>

  },
  {
    path:"/about",
    element:<AboutPage/>
  },
  {
    path:"/facilities",
    element:<FacilitiesPage/>
  },
  {
    path:"/gallery",
    element:<GalleryContactPage/>
  },
  {
    path:"/contact",
    element:<ContactPage/>
  }
])

function App() {
  return (
  

  <RouterProvider router={router}>

  </RouterProvider>
   
  )
}

export default App