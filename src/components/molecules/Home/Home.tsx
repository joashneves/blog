import styles from './Home.module.css';

interface HomeProps {
  primeiralinha: string;
  titulo: string;
}

const Home: React.FC<HomeProps> = (props) => {
    return(
        <>
        <article >
            <div className={styles.inicio}>
            <h1>{props.titulo}</h1>
            <p>{props.primeiralinha}</p>
            </div>

        </article ></>
    )
}

export default Home;