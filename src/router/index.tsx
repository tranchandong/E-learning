import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import CoursesCategory from '../pages/CoursesCategory'
import CrouresAll from '../pages/CrouresAll'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import Serp from '../pages/Serp'
import Test from '../pages/Test'



const Router = (props: any) => {
    const element = useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/home',
                    element: <Home />,
                },
                {
                    path: '/:search',
                    element: <Serp />,
                },
                {
                    path: '/category/:id',
                    element: <CoursesCategory />
                },
                {
                    path: '/courses/:id',
                    element: <Detail />
                },
                {
                    path: '/courses/',
                    element: <CrouresAll />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/register',
                    element: <Register />
                },
                {
                    path: '/profile',
                    element: <Profile />
                },
                {
                    path: '/test',
                    element: <Test />
                },
            ]
        }
    ])
    return element
}

export default Router