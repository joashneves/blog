import styles from './Home.module.css';

import icon from '../../../../public/joash-icon.png'
import iconHtml from '../../../assets/html-coding-svgrepo-com.svg'
import iconGameMaker from '../../../assets/light-gamemaker2-svgrepo-com.svg'
interface HomeProps {
  primeiralinha: string;
  segundalinha: string;
  terceiralinha: string;
  quartalinha: string;
  quintalinha : string;
  sextalinha : string;
  titulo: string;
}

const Home: React.FC<HomeProps> = (props) => {
    return(
        <>
        <article id="Inicio" >
        <div className={styles.inicio}>
            <h1 className={styles.titulo}>{props.titulo}</h1>
            <div className={styles.content}>
            <img src={icon} className={styles.imagemLinha} alt='icon-pagina' />
            <div >
            <p>{props.primeiralinha}</p>
            <p>{props.segundalinha}</p>
            </div>
            
            </div>
            <div className={styles.content}>
            <div>
            <p>{props.terceiralinha}</p>
            <p>{props.quartalinha}</p>
            </div>
            <img src={iconHtml} className={styles.imagemLinha} alt='icon-pagina' />
            </div>

            <div className={styles.content}>
            <img src={iconGameMaker} className={styles.imagemLinha} alt='icon-pagina' />
            <div >
            <p>{props.quintalinha}</p>
            <p>{props.sextalinha}</p>
            </div>
            </div>
        </div>

        </article ></>
    )
}

export default Home;