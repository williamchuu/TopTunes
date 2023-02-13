import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Logo() {
    const router = useRouter();

    const handleClickLogo = () => {
        router.push('/')
    }
    return (
        <div className={styles.logoCont}>
            <img onClick={handleClickLogo} src="/toptuneslogo.svg" alt="logo" className={styles.logo} />
        </div>
    )
}