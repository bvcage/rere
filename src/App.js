import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// routes
import Home from './routes/Home'

// templates
import RootTemplate from './components/RootTemplate'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootTemplate />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App