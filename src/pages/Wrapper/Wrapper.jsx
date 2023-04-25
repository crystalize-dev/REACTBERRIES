import React from 'react';
import cl from "./Wrapper.module.css"
import Header from "../../components/header/header";
import Header2 from "../../components/header2/Header2";


const Wrapper = () => {
    return (
        <div className={cl.wrapper}>
            <Header/>
            <Header2/>

            <div className={cl.temp}/>
        </div>
    );
};

export default Wrapper;