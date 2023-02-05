import { useRoutes } from 'react-router'
import MainLayout from '../layouts/main'
import HomePage from '../pages/HomePage'

export default function Router() {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [{ element: <HomePage />, index: true }],
    },
  ])
}
