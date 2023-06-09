import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// routes
import Home from './routes/Home'

// templates
import RootTemplate from './components/RootTemplate'
import About from './routes/About'
import Account from './routes/account/Account'
import ListingDetail from './routes/listings/ListingDetail'
import Listings from './routes/listings/Listings'
import LoginForm from './routes/account/LoginForm'
import Logout from './routes/account/Logout'
import NewListingForm from './routes/listings/NewListingForm'
import SignupForm from './routes/account/SignupForm'
import UserProfile from './routes/account/UserProfile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootTemplate />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'account',
        element: <Account />,
        children: [
          {
            path: '',
            element: <UserProfile />
          },
          {
            path: 'login',
            element: <LoginForm />
          },
          {
            path: 'logout',
            element: <Logout />
          },
          {
            path: 'signup',
            element: <SignupForm />
          }
        ]
      },
      {
        path: 'listings',
        children: [
          {
            path: 'new',
            element: <NewListingForm />
          },
          {
            path: ':id',
            element: <ListingDetail />
          },
          {
            path: '',
            element: <Listings />
          }
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App