import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// routes

// templates
import RootTemplate from './components/RootTemplate'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootTemplate />,
    children: [
      
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App