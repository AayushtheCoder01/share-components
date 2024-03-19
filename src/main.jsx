import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter,  } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import Codes from './Components/Codes.jsx'
import CreateComponent from './Components/AddNew.jsx'
import UserComponents, {loaderFunction} from './Components/UserComponents.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'signup',
        element: <Signup/>
      },
      {
        path: 'home',
        element: <Home/>
      },
      {
        path: 'components/codes/:collection/:id',
        element: <Codes/>
      },
      {
        path: 'home/add-component',
        element: <CreateComponent/>
      },
      {
        path: 'your-components',
        element: <UserComponents/>,
        loader : loaderFunction
      }
    ],
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}/>
        <App />
    </React.StrictMode>,
  </Provider>

)
