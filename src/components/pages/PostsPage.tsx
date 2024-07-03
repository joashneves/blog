import Social from "../atoms/Social/Social"
import Hud from "../molecules/Hud/Hud"
import PostsTamplate from "../templates/PostsTamplate/PostsTamplate"
import Cabecalho from "../templates/cabecalho/Cabecalho"

import styles from './PostsPage.module.css'
import json from '../../../post/publicacao/publicacao.json'

const PostsPage = () =>{
    return(
        <>
        <Hud inicio='Inicio' posts='Posts' project='Project' contato='Contato'/>
        <div className={styles.postsColumn}>
        {json.map((data, index) => (
                    <PostsTamplate
                        key={index} // Adicione uma chave única para cada item
                        titulo={data.titulo}
                        descricao={data.descricao}
                        id={data.id}
                        data={data.data}
                    />
                ))}
        </div>
        <Cabecalho/>
        </>
    )
}

export default PostsPage;