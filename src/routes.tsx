/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root/Root';
import Home from './routes/Home/Home';
import Category from './routes/Category/Category';
import Article from './routes/Article/Article';
import NotFound from './components/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category/:slug',
        element: <Category />,
      },
      {
        path: '/article/:id',
        element: <Article />,
      },
      {
        path: '/article/:slug',
        element: <Article />,
      },
    ],
  },
]);
