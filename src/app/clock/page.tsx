'use client'

import { useState, useEffect } from 'react';
import { Megrim } from 'next/font/google';
import styles from "./page.module.css";
import React from 'react';

const megrim = Megrim({ subsets: ['latin'], weight: '400' });

export default function ClockPage() {
    const [time, setTime] = useState<string[]>(["2","2","2","2","2","2"]);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [darknessOn, setDarknessOn] = useState(false);

    //setTime
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Intl.DateTimeFormat("en-GB", {
                hour12: false,
                timeZone: "Europe/Riga",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }).format(new Date()).replace(/\D/g, "").split(""));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    //setMouse
    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key.toLowerCase() === 'f') {
            setDarknessOn(prev => !prev);
        }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);


    return (
        <div className={styles.mainContainer}>            
            <div className={styles.clock}>
                <div className={`${styles.top} ${darknessOn ? styles.dark : ''} ${megrim.className}`}>
                    {time.map((digit, i) => (
                        <React.Fragment key={`group-${i}`}>
                            <div className={styles.digitTube}>
                            {Array.from({ length: 10 }, (_, number) => (
                                <div
                                    key={number}
                                    className={`
                                        ${styles.digit} 
                                        ${number === +digit ? styles.active : styles.inactive}
                                        ${darknessOn ? styles.dark : ''}
                                    `}
                                >
                                {number}
                                </div>
                            ))}
                            </div>

                            {(i + 1) % 2 === 0 && i !== time.length - 1 && (
                                <div key={`sep-${i}`} className={styles.seperator}>:</div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className={styles.base}></div>
            </div>
            <div 
                className={styles.darkness}
                style={{
                    display: darknessOn ? '' : 'none', 
                }}
            ></div>
        </div>
    );
}