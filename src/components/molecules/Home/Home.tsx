import styles from './Home.module.css';

import icon from '../../../../public/joash-icon.png'

interface HomeProps {
  primeiralinha: string;
  segundalinha: string;
  titulo: string;
}

const Home: React.FC<HomeProps> = (props) => {
    return(
        <>
        <article >
        <div className={styles.inicio}>
            <h1 className={styles.titulo}>{props.titulo}</h1>
            <div className={styles.content}>
            <img src={icon} className={styles.imagemLinha} alt='icon-pagina' />
            <div >
            <p>{props.primeiralinha}</p>
            <p>{props.segundalinha}</p>
            </div>
            </div>
        </div>

        </article ></>
    )
}

export default Home;