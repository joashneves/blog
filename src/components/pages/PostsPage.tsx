import Social from "../atoms/Social/Social"
import Hud from "../molecules/Hud/Hud"
import PostsTamplate from "../templates/PostsTamplate/PostsTamplate"
import Cabecalho from "../templates/cabecalho/Cabecalho"
import styles from './PostsPage.module.css'

const PostsPage = () =>{
    return(
        <>
        <Hud inicio='Inicio' posts='Posts' project='Project' contato='Contato'/>
        <div className={styles.postsColumn}>
        <PostsTamplate titulo="Test1" descricao="Descricao descrita" data="21-04-2024" />
        <PostsTamplate titulo="Bot do discord" descricao="Bot do discord que fazer coisas no discord" data="02-07-2024" />
        <PostsTamplate titulo="Test1" descricao="Descricao descrita" data="21-04-2024" />
        <PostsTamplate titulo="Bot do discord" descricao="Bot do discord que fazer coisas no discord" data="02-07-2024" />
        <PostsTamplate titulo="Test1" descricao="Descricao descrita" data="21-04-2024" />
        <PostsTamplate titulo="Bot do discord" descricao="Bot do discord que fazer coisas no discord" data="02-07-2024" />
        </div>
        <Cabecalho/>
        </>
    )
}

export default PostsPage;