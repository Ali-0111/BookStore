import { useRoutes } from 'react-router-dom';
import BookWrapper from '../Books/BookWrapper';
import Category from '../Category';

export default function AppRoutes() {
  const elements = [
    {
      path: '/',
      element: <BookWrapper />,
      children: [],
    },
    {
      path: '/categories',
      element: <Category />,
      children: [],
    },
  ];
  const appRoutes = useRoutes(elements);
  return appRoutes;
}
