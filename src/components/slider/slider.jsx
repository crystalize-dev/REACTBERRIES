import React, {useState} from 'react';
import cl from "./slider.module.css";
import Icon from "../icon/icon";
import classes from "classnames";



const Slider = () => {
    const [activeSlide, setActiveSlide] = useState(7)

    const slides = [1,2,3,4,5,6,7]

    const getClassForRound = (slide) => {
        const indexOfCentral = slides.indexOf(activeSlide)

        const central = slides[indexOfCentral]
        const minusOne = slides[indexOfCentral - 1 < 0 ? 6 : (indexOfCentral - 1) % slides.length]
        const minusTwo = slides[indexOfCentral - 2 < 0 ? 5 : (indexOfCentral - 2) % slides.length]
        const plusOne = slides[(indexOfCentral + 1) % slides.length]
        const plusTwo = slides[(indexOfCentral + 2) % slides.length]


        console.log(minusTwo, minusOne, central, plusOne, plusTwo)

        if (slide === central) return cl.smallRound
        else if (slide === minusOne || slide === plusOne) return classes(cl.smallRound, cl.visible)
        else if (slide === minusTwo || slide === plusTwo) return classes(cl.smallRound, cl.almostVisible)
        else return classes(cl.smallRound, cl.invisible)
    }

    return (
        <div className={cl.slider}>
            <div className={cl.window}>
                <div className={classes(cl.arrow, cl.left)}><Icon>arrow_back</Icon></div>


                <div className={classes(cl.arrow, cl.right)}><Icon>arrow_forward</Icon></div>
            </div>

            <div className={cl.switch}>
                <div className={cl.wrapper}>
                    {slides.map(slide => <div key={slide}
                                              className={getClassForRound(slide)}
                                              id={slide}
                                              onClick={e => setActiveSlide(parseInt(e.target.id))}/>)}
                </div>
            </div>
        </div>
    );
};

export default Slider;