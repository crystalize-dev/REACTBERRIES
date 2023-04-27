import React from 'react';
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider,
} from "react-router-dom";

import Guest from "../pages/Guest/Guest";

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path="/" element={<Guest />} />
        <Route/>
    </Route>
));

const AppRouter = () => {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
};

export default AppRouter;