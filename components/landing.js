import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Landing() {
    const router = useRouter()

    const handleClick = () => {
        router.push('/hits')

    }

    return (
        <div className={styles.landingCont}>
            <div className={styles.landing}>
                <div className={styles.spacer} />
                <h1 className={styles.h1}>
                    The Tunes of Now, Every Week.
                </h1>
                <div onClick={handleClick} className={styles.button}> Check out Top 100 Hits</div>
            </div>
            <div className={styles.header}>
                <div className={styles.featuredCont}>
                    <div className={styles.featuredText}>Featured Artist</div>
                    <div className={styles.featuredArtist}>Taeyeon</div>
                    <div className={styles.likes}> Likes</div>
                </div>
            </div>
        </div>
    )
}