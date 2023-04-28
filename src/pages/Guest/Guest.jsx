import React, {useState} from 'react';
import cl from "./Guest.module.css"
import Header from "../../components/header/header";
import Header2 from "../../components/header2/Header2";
import Slider from "../../components/slider/slider";
import Card from "../../components/card/card";
import {products} from "../../hardcode/products";
import {slidesScheme} from "../../hardcode/slides";
import classes from "classnames";
import Icon from "../../components/icon/icon";
import Sidebar from "../../components/sidebar/sidebar";


const Guest = () => {
    const [showButton, setShowButton] = useState(false)
    const [sideBarActive, setSideBarActive] = useState(false)

    const setButton = (e) => {
        let scroll = e.target.scrollTop;

        scroll > 200 ? setShowButton(true) : setShowButton(false);
    }

    return (
        <div className={cl.wrapper} onScroll={(e) => setButton(e)}>
            <Header id={'start'}/>
            <Header2 setSidebar={setSideBarActive}/>

            {sideBarActive && <Sidebar setSidebar={setSideBarActive}/>}

            <div className={cl.container}>
                <div className={cl.content}>
                    <Slider slidesScheme={slidesScheme}/>

                    <div className={cl.cardArea}>
                        {products.map(card => <Card key={card.id} img={card.img}/>)}
                    </div>
                </div>
            </div>

            <a href={"#start"} className={showButton ? classes(cl.button, cl.scroll) : classes(cl.button, cl.scroll, cl.hide)}>
                <Icon>arrow_upward</Icon>
            </a>
            <button className={classes(cl.button, cl.support)}>
                <Icon>chat</Icon>
            </button>
        </div>
    );
};

export default Guest;