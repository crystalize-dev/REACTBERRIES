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

            </div>

            <Icon className={cl.close} onClick={() => setSidebar(false)}>close</Icon>
        </aside>
    );
};

export default Sidebar;