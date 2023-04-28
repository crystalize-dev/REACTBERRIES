import React from 'react';
import cl from "./card.module.css"


const Card = ({img}) => {
    return (
        <div className={cl.card}>
            <div className={cl.dark}/>

            <img src={img} alt={"product"}/>
        </div>
    );
};

export default Card;