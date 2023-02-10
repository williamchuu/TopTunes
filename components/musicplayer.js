import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

export default function Player() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    useEffect(() => {
        const music = new Audio('/flowers.mp3');
        if (isPlaying) {
            music.play();
        } else {
            music.pause();
        }
    }, [isPlaying]);

    return (
        <div className={styles.playerCont}>
            <div className={styles.playerButtonCont}>
                <div className={styles.shuffle}></div>
                <div className={styles.previous}></div>
                <div className={styles.playerButtons}>
                    {isPlaying ? (
                        <button className={styles.pause} onClick={handlePause}></button>
                    ) : (
                        <button className={styles.play} onClick={handlePlay}></button>
                    )}
                </div>
                <div className={styles.next}></div>
                <div className={styles.repeat}></div>
            </div>
            <div className={styles.timeCont}>
                <div className={styles.time}>0:00</div>
                <div className={styles.progress}></div>
                <div className={styles.time}>3:22</div>
            </div>
        </div>
    );
};

