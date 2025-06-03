import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Error from './pages/Error.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Portfolio /> //visually appealing aboutme page
      },
      {
        path: "/Resume",
        element: <Resume />
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
