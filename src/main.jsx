import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './index.css';

import Layout from './components/Layout.jsx';
import NotFound from './Pages/Error/NotFound.jsx';
import ClockType1 from './components/ClockType1/Clock.jsx';
import ClockType2 from './components/ClockType2/Clock.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Layout children={<NotFound />}/>,
    },
    {
        path: '/type1',
        element: <Layout children={<ClockType1 />} />,
    },
    {
        path: '/type2',
        element: <Layout children={<ClockType2 />} />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);