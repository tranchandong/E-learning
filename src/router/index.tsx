import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'



const Router = (props: any) => {
    const element = useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: '',
                },
            ]
        }
    ])
    return element
}

export default Router