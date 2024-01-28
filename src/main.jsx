import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App';
import Main from './components/Main';
import Product from './components/Product';
import User from './components/User';
import NotFound from './components/NotFound'
import DetailProduct from './components/DetailProduct';
import LastProduct from './components/LastProduct';
import LastUser from './components/LastUser';
import DetailUser from './components/DetailUser';
import ProductForm from './components/ProductForm';
import ProductEditForm from './components/ProductEditForm';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/products/list/:page?',
        element: <Product />
      },
      {
        path: '/products/detail/:id',
        element: <DetailProduct />
      },
      {
        path: '/products/detail/:id/edit',
        element: <ProductEditForm />
      },
      {
        path: '/products/create',
        element: <ProductForm />
      },
      {
        path: '/products/lastAdedd',
        element: <LastProduct />
      },
      {
        path: '/products/lastAdedd/:id/edit',
        element: <ProductEditForm />
      },
      {
        path: '/users/list/:page?',
        element: <User />
      },
      {
        path: '/users/detail/:id',
        element: <DetailUser />
      },
      {
        path: '/users/lastAdedd',
        element: <LastUser />
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
