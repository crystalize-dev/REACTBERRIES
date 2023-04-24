import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Wrapper from "../pages/Wrapper/Wrapper";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Wrapper />,
    },
]);

const AppRouter = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default AppRouter;