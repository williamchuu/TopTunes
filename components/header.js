import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter();

    const handleClickBack = () => {
        router.push('/')
    }
    return (
        <>
            <div className={styles.backButton} onClick={handleClickBack}>Back</div>
            <div className={styles.header}>
                <div className={styles.heading}>Top 100 Hits</div>
                <div className={styles.imageCont}>
                    <div className={styles.topSong}>Top Song of the Week</div>
                    <div className={styles.topSongName}>Flowers</div>
                    <div className={styles.topSongArtist}>Miley Cyrus</div>
                </div>

            </div>
        </>
    )
}