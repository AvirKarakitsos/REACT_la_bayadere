import '../assets/styles/Color.scss'
import costumes from "../assets/videos/costumes.mp4"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

function Color() {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        ref: ref,
        offset: ["0 1", "1.5 1"]
    })
    
    const speed = useTransform(scrollYProgress, [0,1], ["-465%","400%"])

    return (
        <div className="container colorContainer">
            <div className="colorContainer__text">
                <p className='content'><span>La couleur </span>, dans la production de La Bayadère par l'Opéra de Paris, sublime l'exotisme et le mysticisme de l'œuvre. Les costumes éclatants, inspirés de l'Inde, mêlent ors, rouges, et bleus profonds, tandis que les décors luxuriants contrastent avec le blanc pur des Ombres, renforçant la dimension spirituelle du ballet.</p>
            </div>
            <div ref={ref} className="colorContainer__video">
                <motion.video style={ {y: speed, width: "400px"} } autoPlay muted loop>
                    <source src={costumes} type="video/mp4"/>
                </motion.video>
            </div>
        </div>
    )
}

export default Color