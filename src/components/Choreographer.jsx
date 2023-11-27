import petipa from '../assets/images/petitpa.jpg'
import noureev from '../assets/images/noureev.png'
import "../assets/styles/Choreographer.scss"

function Choreographer() {
    return(
        <div className='container'>
        <h2>De Petipa à Noureev</h2>
        <div className="choreoContainer">
            <img src={petipa} alt="Marius Petipa" className='choreoContainer__image'/>
            <div className="choreoContainer__text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis cum perspiciatis aut id reiciendis odio assumenda optio? Eos animi quas distinctio hic dolore saepe repellat culpa libero omnis! Magni, a!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sint nihil esse vero dolores corporis? Sit sequi sapiente nulla porro excepturi voluptas laboriosam! Vitae cumque veritatis eius libero alias impedit.</p>
            </div>
            <img src={noureev} alt="Rudolph Noureev" className='choreoContainer__image'/>
        </div>
        </div>
    )
}

export default Choreographer