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
                    <img loading='lazy' src={minkus} alt="Ludwig Minkus"/>
                    <figcaption>Ludwig Minkus</figcaption>
                </motion.figure>
                <div className="composerContainer__text">
                    <p className='content'><span>Minkus</span>, compositeur autrichien reconnu pour ses musiques de ballet, a créé la partition de La Bayadère en 1877. Collaborateur régulier de Marius Petipa, Minkus a conçu une musique en harmonie parfaite avec la chorégraphie, soutenant à la fois l'intensité dramatique et la virtuosité technique des danseurs. Sa partition, riche en mélodies expressives et rythmes envoûtants, est essentielle à l'atmosphère exotique et mystique du ballet, contribuant à son succès durable sur les scènes mondiales.</p>
                </div>
            </div>
            <Scores/>
        </div>
    )
}

export default Composer