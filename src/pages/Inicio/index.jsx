import styles from './styles.module.css'
import Banner from '../../components/Banner'
import Titulo from '../../components/Titulo'
import Card from '../../components/Card'
import { useEffect, useState } from 'react'

function Inicio () {
    const [videos , setvideos] = useState([])

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/isabely-cards/cinetag-api/videos")
        .then(resposta => resposta.json())
        .then(dados => {
            setvideos(dados)
        })
    }, [])

    return(
        <>
        <Banner imagem="home"/>
        <Titulo>
            <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Titulo>
        <section className={styles.container}>
            {videos.map((videos) => {
                return <Card {...videos} key={videos.id}/>
            })}
        </section>
        </>
    )
}

export default Inicio