import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import songs from '../data/spotify.json'

const inter = Inter({ subsets: ['latin'] })

export default function Artists() {

    return (
        <>
            <div className={styles.titleCont}>
                <div className={styles.title}>#</div>
                <div className={styles.title}>Song</div>
                <div className={styles.title}>Artist</div>
                <div className={styles.title}>Plays</div>
            </div>
            <div className={styles.line} />
            <div className={styles.songsCont}>
                {
                    songs.map((s, index) => {
                        return (
                            <div >
                                <>{s.Pos <= 100 ? <div className={styles.list} key={index}>
                                    <div className={styles.rank}>{s.Pos}</div>
                                    <div className={styles.songName}>{s.Title}</div>
                                    <div className={styles.songArtist}>{s.Artist}</div>
                                    <div className={styles.songPlays}>{s.Streams.toLocaleString()} plays</div>
                                </div> : <></>}</>
                                <div className={styles.thinLine} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}