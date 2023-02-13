import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import songs from '../data/spotify.json'
import Artists from '../components/artists'
import Logo from '../components/logo'
import Landing from '../components/landing'
import Player from '../components/musicplayer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>TopTunes</title>
        <meta name="description" content="The Tunes of Now, Every Week" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/toptuneslogo.svg" />
      </Head>
      <main className={styles.main}>
        <Logo />
        <Landing />
        {/* <Player /> */}

      </main>
    </>
  )
}
