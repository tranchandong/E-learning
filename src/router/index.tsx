import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
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
            ]
        }
    ])
    return element
}

export default Router