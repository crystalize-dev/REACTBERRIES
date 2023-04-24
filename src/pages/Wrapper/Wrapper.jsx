import React from 'react';
import cl from "./Wrapper.module.css"
import Header from "../../components/header/header";
import {Outlet} from "react-router-dom";


const Wrapper = () => {
    return (
        <div className={cl.wrapper}>
            <Header/>

            <Outlet/>
        </div>
    );
};

export default Wrapper;