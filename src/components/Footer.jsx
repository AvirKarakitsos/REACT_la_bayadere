import "../assets/styles/Footer.scss"
import github from "../assets/images/footer/github.png"
import logo from "../assets/images/footer/logo-light.png"
function Footer() {
    return(
        <footer>
            <p>Merci d&apos;avoir regardé</p>
            <ul className="navbar">
                <li><img src={github} height={30} width={30} alt="logo github"/><a href="https://github.com/AvirKarakitsos/REACT_la_bayadere" target="_blank" rel="noreferrer">Lien du code</a></li>
                <li><img src={logo} height={30} width={30} alt="logo portfolio"/><a href="https://arnocotsoyannis-portfolio.onrender.com" target="_blank" rel="noreferrer">Retour sur le portfolio</a></li>
            </ul>
        </footer>
    )
}

export default Footer