import styles from '../styles/Home.module.css'

export default function Logo() {
    return (
        <div className={styles.logoCont}>
            <img src="/logo.png" alt="logo" className={styles.logo} />
            <div className={styles.logoText}>TopTunes</div>
        </div>
    )
}