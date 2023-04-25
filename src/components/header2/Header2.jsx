import React, {useState} from 'react';
import cl from "./header2.module.css";
import Icon from "../icon/icon";


const Header2 = () => {
    const [query, setQuery] = useState('')

    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <div className={cl.toggleSidebar}>
                    <Icon>menu</Icon>
                </div>

                <h1>REACTSHOP</h1>

                <div className={cl.inputWrapper}>
                    <input value={query} onChange={e => setQuery(e.target.value)} placeholder={"Я ищу..."}/>
                    <Icon>search</Icon>
                    {query !== "" && <Icon>close</Icon>}
                </div>

                <div className={cl.options}>
                    <div className={cl.optionItem}>
                        <Icon>location_on</Icon>
                        <p>Адреса</p>
                    </div>
                    <div className={cl.optionItem}>
                        <Icon>local_shipping</Icon>
                        <p>Доставка</p>
                    </div>
                    <div className={cl.optionItem}>
                        <Icon>person</Icon>
                        <p>Профиль</p>
                    </div>
                    <div className={cl.optionItem}>
                        <Icon>shopping_cart</Icon>
                        <p>Корзина</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header2;