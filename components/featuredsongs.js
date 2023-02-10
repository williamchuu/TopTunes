import styles from '../styles/Home.module.css'

export default function FeaturedSongs() {
    return (
        <div className={styles.featuredSongs}>
            <div className={styles.featuredTitleCont}>
                <div className={styles.featuredTitleNumber}>1</div>
                <div className={styles.featuredTitleSong}>Fine</div>
                <div className={styles.featuredTitlePlays}>109,501,375</div>
            </div>
            <div className={styles.featuredTitleCont}>
                <div className={styles.featuredTitleNumber}>2</div>
                <div className={styles.featuredTitleSong}>INVU</div>
                <div className={styles.featuredTitlePlays}>62,185,193</div>
            </div>
            <div className={styles.featuredTitleCont}>
                <div className={styles.featuredTitleNumber}>3</div>
                <div className={styles.featuredTitleSong}>I</div>
                <div className={styles.featuredTitlePlays}>58,845,571</div>
            </div>
            <div className={styles.featuredTitleCont}>
                <div className={styles.featuredTitleNumber}>4</div>
                <div className={styles.featuredTitleSong}>Spark</div>
                <div className={styles.featuredTitlePlays}>30,361,313</div>
            </div>
        </div>
    )
}