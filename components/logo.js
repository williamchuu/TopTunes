import styles from '../styles/Home.module.css'

export default function Logo() {
    return (
        <div className={styles.logoCont}>
            <img src="/toptuneslogo.svg" alt="logo" className={styles.logo} />
        </div>
    )
}