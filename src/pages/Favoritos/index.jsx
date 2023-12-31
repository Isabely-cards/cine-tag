import Titulo from "../../components/Titulo"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import { useFavoritoContext } from '../../contextos/Favoritos';
import styles from './styles.module.css'

function Favoritos() {
    const {favorito} = useFavoritoContext();
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}
export default Favoritos