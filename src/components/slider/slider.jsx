import React, {useState} from 'react';
import cl from "./slider.module.css"
import classNames from "classnames";
import SlideElem from "./sliderElem/slideElem";
import Icon from "../icon/icon";


const Slider = ({slidesScheme}) => {
    // eslint-disable-next-line no-unused-vars
    const [slides, setSlides] = useState(slidesScheme)
    const [activeSlide, setActiveSlide] = useState(slides[0])


    const setNextSlide = () => {
        let nextSlide = slides.indexOf(activeSlide) + 1

        if (nextSlide <= slides.length - 1) {
            setActiveSlide(slides[nextSlide])
        } else {
            setActiveSlide(slides[0])
        }
    }

    const setPrevSlide = () => {
        let prevSlide = slides.indexOf(activeSlide) - 1

        if (prevSlide >= 0) {
            setActiveSlide(slides[prevSlide])
        } else {
            setActiveSlide(slides[slides.length - 1])
        }
    }

    return (
        <div className={cl.wrapper}>
            <Icon className={classNames(cl.arrowLeft, cl.arrow)} onClick={() => setPrevSlide()}>arrow_back</Icon>

            <div className={cl.window}>
                {slides.map(slideElem =>
                    <SlideElem key={slideElem.id}
                               style={slideElem.id === 0 ? {marginLeft: `${-activeSlide.id * 100}%`} : null}
                               text={slideElem.text}
                               img={slideElem.img}
                               description={slideElem.description}/>)
                }
            </div>

            <div className={cl.switchWrapper}>
                {slides.map(slideElem =>
                    <div key={slideElem.id}
                         className={slideElem.id === activeSlide.id ? classNames(cl.switch, cl.switchActive) : cl.switch}
                         onClick={() => setActiveSlide(slideElem)}/>)}
            </div>

            <Icon className={classNames(cl.arrowRight, cl.arrow)} onClick={() => setNextSlide()}>arrow_forward</Icon>
        </div>
    );
};

export default Slider;