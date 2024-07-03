import Social from "../../atoms/Social/Social"
import styles from './Cabecalho.module.css'

const Cabecalho = () => {
    return (
        <>
            <div className={styles.cabecalho}>
                <Social />
            </div></>
    )
}

export default Cabecalho;