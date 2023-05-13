import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import CoursesCategory from '../pages/CoursesCategory'
import Detail from '../pages/Detail'
import Home from '../pages/Home'



const Router = (props: any) => {
    const element = useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/home',
                    element: <Home />,
                },
                {
                    path: '/category/:id',
                    element: <CoursesCategory />
                },
                {
                    path: '/courses/:id',
                    element: <Detail />
                },
            ]
        }
    ])
    return element
}

export default Router