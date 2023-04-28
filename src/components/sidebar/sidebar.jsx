import React from 'react';
import cl from "./sidebar.module.css"
import Icon from "../icon/icon";


const Sidebar = ({setSidebar}) => {
    return (
        <aside className={cl.wrapper} onMouseDown={() => setSidebar(false)}>
            <div className={cl.window} onMouseDown={(e) => e.stopPropagation()}>

                <div className={cl.item}>
                    <Icon>female</Icon>
                    <p>Женщинам</p>
                </div>

                <div className={cl.item}>
                    <Icon>steps</Icon>
                    <p>Обувь</p>
                </div>

                <div className={cl.item}>
                    <Icon>child_friendly</Icon>
                    <p>Детям</p>
                </div>

                <div className={cl.item}>
                    <Icon>male</Icon>
                    <p>Мужчинам</p>
                </div>

                <div className={cl.item}>
                    <Icon>home</Icon>
                    <p>Дом</p>
                </div>

                <div className={cl.item}>
                    <Icon>styler</Icon>
                    <p>Красота</p>
                </div>

                <div className={cl.item}>
                    <Icon>bolt</Icon>
                    <p>Электроника</p>
                </div>

            </div>

            <Icon className={cl.close} onClick={() => setSidebar(false)}>close</Icon>
        </aside>
    );
};

export default Sidebar;