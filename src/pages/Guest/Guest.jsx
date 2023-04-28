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
import ChatSupport from "../../components/chatSupport/chatSupport";


const Guest = () => {
    const [sideBarActive, setSideBarActive] = useState(false)
    const [chatModal, setChatModal] = useState(false)

    return (
        <div className={cl.wrapper}>
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

            <a href={"#start"} className={classes(cl.button, cl.scroll)}>
                <Icon>arrow_upward</Icon>
            </a>
            <button className={classes(cl.button, cl.support)} onClick={() => setChatModal(true)}>
                <Icon>chat</Icon>
            </button>

            <ChatSupport modal={chatModal} setModal={setChatModal}/>

            <div className={cl.footer}>
                <Icon>home</Icon>
                <Icon>manage_search</Icon>
                <Icon>shopping_cart</Icon>
                <Icon>favorite</Icon>
                <Icon>person</Icon>
            </div>
        </div>
    );
};

export default Guest;