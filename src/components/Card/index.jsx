import styles from "./styles.module.css"
import iconeFavoritar from "./favoritar.png"
import { useFavoritoContext } from "../../contextos/Favoritos"
import iconeDesfavoritar from "./desfavoritar.png"


function Card({ id, capa, titulo }) {
    const { favorito, adicionarFavorito } = useFavoritoContext()
    const ehFavorito = favorito.some((fav) => fav.id === id)
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar

    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img
                src={icone}
                alt="Favoritar filme"
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa})
                }}
            />
        </div>
    )
}
export default Card