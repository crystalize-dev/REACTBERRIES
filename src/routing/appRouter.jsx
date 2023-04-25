import React from 'react';
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider,
} from "react-router-dom";

import Wrapper from "../pages/Wrapper/Wrapper";

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path="/" element={<Wrapper />} />
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