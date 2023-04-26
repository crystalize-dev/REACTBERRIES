import React from 'react';
import cl from "./Wrapper.module.css"
import Header from "../../components/header/header";
import Header2 from "../../components/header2/Header2";
import Slider from "../../components/slider/slider";


const Wrapper = () => {
    return (
        <div className={cl.wrapper}>
            <Header/>
            <Header2/>

            <div className={cl.container}>
                <Slider />


            </div>
        </div>
    );
};

export default Wrapper;