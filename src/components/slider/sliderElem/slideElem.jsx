import React from 'react';
import cl from "./slideElem.module.css"


const SlideElem = ({text, description, img, ...props}) => {
    return (
        <div {...props} className={cl.wrapper}>
            <img src={img} alt={"slide_img"} draggable={false}/>
        </div>
    );
};

export default SlideElem;