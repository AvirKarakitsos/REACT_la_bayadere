import '../assets/styles/Composer.scss'
import minkus from '../assets/images/minkus.jpg'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Scores from './Scores'

function Composer() {
    
    const imageRef = useRef(null)
    
    const {scrollYProgress} = useScroll({
        target: imageRef,
        offset: ["0 1", "1.33 1"]
    })

    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
    
    return (
        <div ref={imageRef}  className="container">
            <div className="composerContainer">
                <motion.figure style={ {opacity: opacityProgress} }  className="composerContainer__image">
                    <img src={minkus} alt="Ludwig Minkus"/>
                    <figcaption>Ludwig Minkus</figcaption>
                </motion.figure>
                <div className="composerContainer__text">
                    <p className='content'><span>Minkus </span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus velit veritatis aspernatur saepe iusto dolor repudiandae odit, necessitatibus reiciendis nobis ex suscipit hic facilis quibusdam doloremque, repellendus veniam consequatur asperiores!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus velit veritatis aspernatur saepe iusto dolor repudiandae odit, necessitatibus reiciendis nobis ex suscipit hic facilis quibusdam doloremque, repellendus veniam consequatur asperiores!</p>
                </div>
            </div>
            <Scores/>
        </div>
    )
}

export default Composer