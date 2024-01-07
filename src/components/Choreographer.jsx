import petipa from '../assets/images/petitpa.jpg'
import noureev from '../assets/images/noureev.png'
import "../assets/styles/Choreographer.scss"
import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Choreographer() {
    const imageRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: imageRef,
        offset: ["0.5 1", "1.33 1"]
    })
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.1, 1])

    return(
        <div className='container'>
        <h2>De Petipa à Noureev</h2>
        <div className="choreoContainer">
            <motion.figure ref={imageRef} style={ {opacity: opacityProgress} } className='choreoContainer__image'>
                <img src={petipa} alt="Marius Petipa"/>
                <figcaption>Marius Petipa</figcaption>
            </motion.figure>
            <div className="choreoContainer__text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis cum perspiciatis aut id reiciendis odio assumenda optio? Eos animi quas distinctio hic dolore saepe repellat culpa libero omnis! Magni, a!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sint nihil esse vero dolores corporis? Sit sequi sapiente nulla porro excepturi voluptas laboriosam! Vitae cumque veritatis eius libero alias impedit.</p>
            </div>
            <motion.figure ref={imageRef} style={ {opacity: opacityProgress} } className='choreoContainer__image'>
                <img src={noureev} alt="Rudolph Noureev"/>
                <figcaption>Rudolph Noureev</figcaption>
            </motion.figure>
        </div>
        </div>
    )
}

export default Choreographer