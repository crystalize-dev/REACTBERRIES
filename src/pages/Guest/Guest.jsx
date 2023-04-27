import React from 'react';
import cl from "./Guest.module.css"
import Header from "../../components/header/header";
import Header2 from "../../components/header2/Header2";
import Slider from "../../components/slider/slider";


const Guest = () => {
    return (
        <div className={cl.wrapper}>
            <Header/>
            <Header2/>

            <div className={cl.container}>
                <div className={cl.content}>
                    <Slider/>

                </div>
            </div>
        </div>
    );
};

export default Guest;