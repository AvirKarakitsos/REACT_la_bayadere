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
            {windowWidth > 768 
                ? <><figure className='choreoContainer__image choreoContainer__image--petipa'>
                     <motion.img style={ {opacity: opacityProgress} } src={petipa} alt="Marius Petipa"/>
                     <figcaption>Marius Petipa</figcaption>
                    </figure>
                    <div className="choreoContainer__text">
                        <p className='content'><span>Petipa </span>crée en 1877 le ballet classique majeur la Bayadère. Chorégraphe emblématique du 19e siècle, Petipa a conçu cette œuvre en trois actes, avec une musique de Ludwig Minkus. L'histoire dramatique d'amour, de trahison et de vengeance se déroule dans une Inde exotique, mettant en scène Nikiya, une danseuse sacrée, et Solor, un guerrier. La scène célèbre du "Royaume des Ombres" est un sommet de la chorégraphie classique.</p>
                        <p className='content'><span>Noureev</span>, danseur et chorégraphe légendaire, a joué un rôle clé dans la popularisation de La Bayadère en Occident. En 1992, il a introduit une version révisée du ballet au Ballet de l'Opéra de Paris, basée sur la chorégraphie originale de Petipa. Sa production a conservé l'essence dramatique et technique du ballet tout en y ajoutant sa touche personnelle. Grâce à Noureev, La Bayadère est devenue un classique incontournable sur la scène internationale.</p>
                    </div>
                    <figure className='choreoContainer__image choreoContainer__image--noureev'>
                        <motion.img style={ {opacity: opacityProgress2} }  src={noureev} alt="Rudolph Noureev"/>
                        <figcaption>Rudolph Noureev</figcaption>
                    </figure>
                    </>
                :  <><div className='smallContainer'>
                        <figure className='choreoContainer__image choreoContainer__image--petipa'>
                        <motion.img style={ {opacity: opacityProgress} } src={petipa} alt="Marius Petipa"/>
                        <figcaption>Marius Petipa</figcaption>
                        </figure>
                        <p className='content'><span>Petipa </span>crée en 1877 le ballet classique majeur la Bayadère. Chorégraphe emblématique du 19e siècle, Petipa a conçu cette œuvre en trois actes, avec une musique de Ludwig Minkus. L'histoire dramatique d'amour, de trahison et de vengeance se déroule dans une Inde exotique, mettant en scène Nikiya, une danseuse sacrée, et Solor, un guerrier. La scène célèbre du "Royaume des Ombres" est un sommet de la chorégraphie classique.</p>
                    </div>
                    <div className='smallContainer'>
                        <figure className='choreoContainer__image choreoContainer__image--noureev'>
                            <motion.img style={ {opacity: opacityProgress2} }  src={noureev} alt="Rudolph Noureev"/>
                            <figcaption>Rudolph Noureev</figcaption>
                        </figure>
                        <p className='content'><span>Noureev </span>, danseur et chorégraphe légendaire, a joué un rôle clé dans la popularisation de La Bayadère en Occident. En 1992, il a introduit une version révisée du ballet au Ballet de l'Opéra de Paris, basée sur la chorégraphie originale de Petipa. Sa production a conservé l'essence dramatique et technique du ballet tout en y ajoutant sa touche personnelle. Grâce à Noureev, La Bayadère est devenue un classique incontournable sur la scène internationale.</p>
                    </div>
                    </>
        }
        </div>
    )
}

export default Choreographer