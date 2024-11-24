import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorpage from './Components/error/errorpage';
import Main from './Components/Main/Main';
import Albams from './Components/pagase/albams/Albams';
import Ditals from './Components/pagase/Ditals/Ditals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Albams></Albams>,
        loader: ()=> fetch('http://localhost:5000/albams/')
      },
      {
        path: '/albam/:id',
        element: <Ditals></Ditals>,
        loader: ({params}) => fetch(`http://localhost:5000/albams/${params.id}`)
      }
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
