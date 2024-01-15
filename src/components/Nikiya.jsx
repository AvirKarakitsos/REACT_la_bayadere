import "../assets/styles/Nikiya.scss"
import training from "../assets/videos/training.mp4"
import ballet from "../assets/videos/ballet.mp4"

function Nikiya() {
    return(
        <div className=" container nikiyaContainer">
            <div className="nikiyaContainer__text nikiyaContainer__text--start">
                <p className="content"><span>Nikiya </span>lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur illum ipsa corrupti ipsum praesentium neque quaerat vel dolores obcaecati molestiae veritatis ullam consequuntur, porro libero iure corporis, optio quasi.quaerat vel dolores obcaecati molestiae veritatis ullam consequuntur, porro libero iure corporis, optio quasi.</p>
            </div>
            <div className="nikiyaContainer__videos">
                <video className="nikiyaContainer__videos--training" autoPlay muted loop>
                    <source src={training} type="video/mp4"/>
                </video>
                <video className="nikiyaContainer__videos--ballet" autoPlay muted loop>
                    <source src={ballet} type="video/mp4"/>
                </video>
            </div>
            <div className="nikiyaContainer__text nikiyaContainer__text--end">
                <p className="content"><span>Isabelle Guérin </span>lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur illum ipsa corrupti ipsum praesentium neque quaerat vel dolores obcaecati molestiae veritatis ullam consequuntur, porro libero iure corporis, optio quasi.quaerat vel dolores obcaecati molestiae veritatis ullam consequuntur, porro libero iure corporis, optio quasi.</p>
            </div>
        </div>
    )
}

export default Nikiya