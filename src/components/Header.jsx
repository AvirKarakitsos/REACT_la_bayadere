import '../assets/styles/Header.scss'
import parallax1 from "../assets/images/baya-para-1.jpg"
import parallax2 from "../assets/images/baya-para-2.jpg"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

function Header() {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        ref: ref,
        offset: ["start start", "end start"]
    })

    const backgroundDansers = useTransform(scrollYProgress, [0,1], ["0px", "700%"])
    const backgroundFloor = useTransform(scrollYProgress, [0,1], ["0px", "600%"])
    const title = useTransform(scrollYProgress, [0,1], ["0%","100%"])

    return (
        <div ref={ref} className="headerContainer">
            <motion.h1 style={ {y: title} } className="headerContainer__title">La Bayadère</motion.h1>
            <motion.img style={ {y: backgroundDansers} } className="headerContainer__background headerContainer__background--dansers" src={parallax1} alt="parallax-1"/>
            <motion.img style={ {y: backgroundFloor} } className="headerContainer__background headerContainer__background--floor" src={parallax2} alt="parallax-2"/>
        </div>
    )
}

export default Header