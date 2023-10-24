import styles from "./styles.module.css"
import iconeFavoritar from "./favoritar.png"

function Card({ id, capa, titulo }) {
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img
                src={iconeFavoritar}
                alt="Favoritar filme"
                className={styles.favoritar}
            />
        </div>
    )
}
export default Card