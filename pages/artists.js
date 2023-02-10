import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import songs from '../data/spotify.json'

const inter = Inter({ subsets: ['latin'] })

const Title = styled.div`
display: flex;
font-size: 16px;
font-weight: 600;
padding: 0 50px 0 50px;
color: white;
`

const TitleCont = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 18px 0px 18px 0px;
`

const Line = styled.hr`
  border: 1px solid white;
  width: 100%;
`;

const ThinLine = styled.hr`
  border: 0.1px solid #5B5B5B;
  width: 100%;
`;
export default function Artists() {

    return (
        <>
            <TitleCont>
                <Title>#</Title>
                <Title>Song</Title>
                <Title>Artist</Title>
                <Title>Plays</Title>
            </TitleCont>
            <Line />

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
                            <ThinLine />
                        </div>
                    )
                })
            }
        </>
    )
}