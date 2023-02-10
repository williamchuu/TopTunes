import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import songs from '../data/spotify.json'
import Artists from '../components/artists'
import Header from '../components/header'
import Logo from '../components/logo'
import Player from '../components/musicplayer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    return (
        <>
            <Head>
                <title>TopTunes</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Logo />
                <Header />
                {/* mapped data is in components > artists.js */}
                <Artists />
                <Player />
            </main>
        </>
    )
}
