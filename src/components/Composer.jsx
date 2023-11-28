import minkus from '../assets/images/minkus.jpg'
import '../assets/styles/Composer.scss'

function Composer() {

    return (
        <div className="container">
            <h2>Ludwig Minkus</h2>
            <div className="composerContainer">
                <figure className="composerContainer__image">
                    <img src={minkus} alt="Ludwig Minkus"/>
                    <figcaption>Ludwig Minkus</figcaption>
                </figure>
                <div className="composerContainer__text">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus velit veritatis aspernatur saepe iusto dolor repudiandae odit, necessitatibus reiciendis nobis ex suscipit hic facilis quibusdam doloremque, repellendus veniam consequatur asperiores!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus velit veritatis aspernatur saepe iusto dolor repudiandae odit, necessitatibus reiciendis nobis ex suscipit hic facilis quibusdam doloremque, repellendus veniam consequatur asperiores!</p>
                </div>
            </div>
        </div>
    )
}

export default Composer