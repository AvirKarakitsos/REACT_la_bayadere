import petipa from '../assets/images/petitpa.jpg'
import noureev from '../assets/images/noureev.png'
import "../assets/styles/Choreographer.scss"
import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function Choreographer() {
    const imageRef = useRef(null)
    const  [windowWidth,setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleSizeViewport() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize",handleSizeViewport)

        return() => {
            window.removeEventListener("resize", handleSizeViewport)
        }

        
    },[windowWidth])
   
    const {scrollYProgress} = useScroll({
        target: imageRef,
        offset: ["0 1", "1.33 1"]
    })
    
    
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
    const opacityProgress2 = useTransform(scrollYProgress, [0, 1], [-0.5, 1])
    
    return(
        <div ref={imageRef} className="container choreoContainer">
            <figure className='choreoContainer__image choreoContainer__image--petipa'>
                <motion.img style={ {opacity: opacityProgress} } src={petipa} alt="Marius Petipa"/>
                <figcaption>Marius Petipa</figcaption>
            </figure>
            {windowWidth > 768 
                ? <div className="choreoContainer__text">
                    <p className='content'><span>Petipa </span>lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis cum perspiciatis aut id reiciendis odio assumenda optio? Eos animi quas distinctio hic dolore saepe repellat culpa libero omnis! Magni, a!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sint nihil esse vero dolores corporis? Sit sequi sapiente nulla porro excepturi voluptas laboriosam! Vitae cumque veritatis eius libero alias impedit.</p>
                    <p className='content'><span>Noureev </span>lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis cum perspiciatis aut id reiciendis odio assumenda optio? Eos animi quas distinctio hic dolore saepe repellat culpa libero omnis! Magni, a!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sint nihil esse vero dolores corporis? Sit sequi sapiente nulla porro excepturi voluptas laboriosam! Vitae cumque veritatis eius libero alias impedit.</p>
                </div>
                : <><div className="choreoContainer__text">
                    <p className='content'><span>Petipa </span>lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis cum perspiciatis aut id reiciendis odio assumenda optio? Eos animi quas distinctio hic dolore saepe repellat culpa libero omnis! Magni, a!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sint nihil esse vero dolores corporis? Sit sequi sapiente nulla porro excepturi voluptas laboriosam! Vitae cumque veritatis eius libero alias impedit.</p>
                    </div>
                    <div className="choreoContainer__text">
                        <p className='content'><span>Noureev </span>lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis cum perspiciatis aut id reiciendis odio assumenda optio? Eos animi quas distinctio hic dolore saepe repellat culpa libero omnis! Magni, a!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sint nihil esse vero dolores corporis? Sit sequi sapiente nulla porro excepturi voluptas laboriosam! Vitae cumque veritatis eius libero alias impedit.</p>
                    </div></>
        }
            <figure className='choreoContainer__image choreoContainer__image--noureev'>
                <motion.img style={ {opacity: opacityProgress2} }  src={noureev} alt="Rudolph Noureev"/>
                <figcaption>Rudolph Noureev</figcaption>
            </figure>
        </div>
    )
}

export default Choreographer