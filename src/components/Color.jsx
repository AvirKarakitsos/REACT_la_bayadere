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
    
    const speed = useTransform(scrollYProgress, [0,1], ["-400%","282%"])

    return (
        <div className="container colorContainer">
            <div className="colorContainer__text">
                <p className='content'><span>La couleur </span>lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut temporibus eligendi numquam sapiente id consequatur cupiditate, dolore odio harum nihil veritatis est nam doloribus assumenda itaque. Illum assumenda tempore eos?</p>
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