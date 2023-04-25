import {useEffect, useState} from "react";
import {locations} from "../hardcode/locations";


export const useLocation = () => {
    const [location, setLocation] = useState(locations[0])

    useEffect(() => {
        if (localStorage.getItem('location')) {
            setLocation(localStorage.getItem('location'))
        }
    }, [])

    const switchLocation = (location) => {
        setLocation(location)
        localStorage.setItem('location', location)
    }

    return [location, switchLocation]
}