import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@/view/home'))
const Say = React.lazy(() => import('@/view/say'))
const About = React.lazy(() => import('@/view/about'))
const Works = React.lazy(() => import('@/view/works'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  { path: '/say', element: <Say /> },
  { path: '/about', element: <About /> },
  { path: '/works', element: <Works /> }
]

export default routes
