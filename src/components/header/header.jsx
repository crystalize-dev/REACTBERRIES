import React, {useContext, useState} from 'react';
import cl from "./header.module.css"
import {LocationContext} from "../../context/locationContext";
import Icon from "../icon/icon";
import {locations} from "../../hardcode/locations";
import classes from 'classnames'

const Header = ({id}) => {
    const {location, setLocation} = useContext(LocationContext)
    // eslint-disable-next-line no-unused-vars
    const [locationsArr, setLocationsArr] = useState(locations.slice(0))

    return (
        <header className={cl.header} id={id}>
            <div className={cl.container}>
                <div className={cl.location}>
                    <Icon>home_pin</Icon>
                    <p>{location}</p>
                </div>
                <div className={cl.modalChoose}>
                    {locationsArr.map(item => <div key={item}
                                                className={item === location ? classes(cl.locationElem, cl.active) : cl.locationElem}
                                                onClick={(e) => setLocation(e.target.innerText.replace('done', ''))}>
                                                    {item}
                        {item === location && <Icon>done</Icon>}</div>)}
                </div>
            </div>
        </header>
    );
};

export default Header;