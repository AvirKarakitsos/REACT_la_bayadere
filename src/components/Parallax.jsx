import '../assets/styles/Parallax.scss'
import parallax1 from "../assets/images/baya-para-1.jpg"
//import parallax2 from "../assets/images/baya-para-2.jpg"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

function Parallax() {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        ref: ref,
        offset: ["start start", "end start"]
    })

    const backgroundDansers = useTransform(scrollYProgress, [0,1], ["0%","200%"])
    // const backgroundFloor = useTransform(scrollYProgress, [0,1], ["0%","175%"])
    const title = useTransform(scrollYProgress, [0,1], ["0%","100%"])

    return (
        <div ref={ref} className="boxParallax">
            <motion.h1 style={ {y: title} } className="boxParallax__title">La Bayadère</motion.h1>
            <motion.img style={ {y: backgroundDansers} } className="boxParallax__background boxParallax__background--dansers" src={parallax1} alt="parallax-1"/>
            {/* <motion.img style={ {y: backgroundFloor} } className="boxParallax__background boxParallax__background--floor" src={parallax2} alt="parallax-2"/> */}
        </div>
    )
}

export default Parallax