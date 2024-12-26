import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './components/hero';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Feature from './components/Feature.jsx';
import Blog from './components/Blog.jsx';
import Team from './components/Team.jsx';
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import Signup from './components/signup.jsx';
import Contact from './components/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "",
        element: <Hero />
      },
      {
        path: "feature",
        element: <Feature />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "team",
        element: <Team />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <Signup />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
