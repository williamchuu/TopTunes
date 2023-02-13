import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import FeaturedSongs from './featuredsongs'

export default function Landing() {
    const router = useRouter()

    const handleClick = () => {
        router.push('/hits')
    }

    const [likes, setLikes] = useState(9610187);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setMessage(`${likes}`);
    }, [likes]);

    return (
        <div className={styles.landingCont}>
            <div className={styles.landing}>
                <div className={styles.spacer} />
                <h1 className={styles.h1}>
                    The Tunes of Now, Every Week.
                </h1>
                <button onClick={handleClick} className={styles.button}>Check out Top 100 Hits</button>
            </div>
            <div className={styles.header}>
                <div className={styles.featuredCont}>
                    <div className={styles.featuredText}>Featured Artist</div>
                    <div className={styles.featuredArtist}>Taeyeon</div>
                    <div className={styles.likeCont}>
                        <button className={styles.heart} onClick={() => setLikes(likes + 1)}>  </button>
                        <div className={styles.likes}>{message} Likes</div>
                    </div>
                    <FeaturedSongs />
                </div>
            </div>
        </div>
    )
}