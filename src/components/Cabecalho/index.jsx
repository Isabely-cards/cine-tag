import { Link } from "react-router-dom"
import Logo from "./logo.png"
import styles from "./styles.module.css"
import CabecalhoLink from "./CabecalhoLink"

function Cabecalho () {
    return(
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={Logo} alt="Logo do cinetag" />
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}
export default Cabecalho