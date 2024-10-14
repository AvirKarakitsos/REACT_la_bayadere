import "../assets/styles/Nikiya.scss"
import training from "../assets/videos/training.mp4"
import ballet from "../assets/videos/ballet.mp4"

function Nikiya() {
    return(
        <div className=" container nikiyaContainer">
            <div className="nikiyaContainer__text nikiyaContainer__text--start">
                <p className="content"><span>Nikiya </span>, la protagoniste de La Bayadère, est une bayadère sacrée, amoureuse du guerrier Solor. Son amour tragique est au cœur de l'intrigue, car elle meurt empoisonnée par jalousie. Après sa mort, son esprit hante Solor dans le célèbre "Royaume des Ombres", symbolisant l'amour éternel et la vengeance au-delà de la mort.</p>
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
                <p className="content"><span>Isabelle Guérin </span>, étoile du Ballet de l'Opéra de Paris, a marqué l'histoire de La Bayadère avec son interprétation de Nikiya dans la version de Rudolf Noureev. Sa performance, alliant technique impeccable et expressivité dramatique, a contribué à faire de ce rôle un des sommets de sa carrière. Elle reste une référence pour ce ballet emblématique.</p>
            </div>
        </div>
    )
}

export default Nikiya