import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './routes/App';
import ErrorPage from './pages/errorPage';
import OnlineTools from './routes/OnlineTools';
import Websites from './routes/Websites';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'onlineTools',
                element: <OnlineTools />,
            },
            {
                path: 'websites',
                element: <Websites />,
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
