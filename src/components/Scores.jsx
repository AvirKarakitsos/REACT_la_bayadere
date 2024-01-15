import '../assets/styles/Composer.scss'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Scores() {
    const scoreRef = useRef(null)
    
    const {scrollYProgress} = useScroll({
        target: scoreRef,
        offset: ["0.25 1", "1.33 1"]
    })
    
    const partion1Progress = useTransform(scrollYProgress, [0, 1], [0, -500])
    const partion1ProgressR = useTransform(scrollYProgress, [0, 1], [0, -30])

    const partion2Progress = useTransform(scrollYProgress, [0, 1], [0, -400])
    const partion2ProgressR = useTransform(scrollYProgress, [0, 1], [0, -10])

    const partion3Progress = useTransform(scrollYProgress, [0, 1], [0, -300])
    const partion3ProgressR = useTransform(scrollYProgress, [0, 1], [0, 25])

    const partion4Progress = useTransform(scrollYProgress, [0, 1], [0, -200])
    const partion4ProgressR = useTransform(scrollYProgress, [0, 1], [0, 0])

    const partion5Progress = useTransform(scrollYProgress, [0, 1], [0, -100])
    const partion5ProgressR = useTransform(scrollYProgress, [0, 1], [0, 30])
   
    const arr = [
        {x: partion1Progress, rotate: partion1ProgressR},
        {x: partion2Progress, rotate: partion2ProgressR}, 
        {x: partion3Progress, rotate: partion3ProgressR},
        {x: partion4Progress, rotate: partion4ProgressR},
        {x: partion5Progress, rotate: partion5ProgressR}
    ]
    
    return ( 
        <div  ref={scoreRef} className="scoresContainer">
            {arr.map((score,index) => <motion.img 
                key={index} 
                style={ {rotate: score.rotate, x: score.x}}
                src={`./scores/score${index+1}.png`} alt={`partition ${index+1}`} 
                className={`scoresContainer__score scoresContainer__score--score${index}`} /> )
            }
        </div>
    )
}

export default Scores