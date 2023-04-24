import React from 'react';
import cl from "./header.module.css"


const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <div className={cl.lang}>
                    <div className={cl.faceLang}>
                        <img alt={"country"}/>
                        <p>RUB</p>
                    </div>
                </div>

                <div className={cl.location}>

                </div>
            </div>
        </header>
    );
};

export default Header;