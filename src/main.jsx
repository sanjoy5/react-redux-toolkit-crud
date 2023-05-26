import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import userReducer from './reducers/userReducer.jsx'
import Create from './pages/Create.jsx'
import Update from './pages/Update.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/create",
    element: <Create></Create>,
  },
  {
    path: "/update/:id",
    element: <Update></Update>,
  },
]);

const store = configureStore({
  reducer: {
    users: userReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
