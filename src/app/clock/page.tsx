'use client'

import { useState, useEffect } from 'react';
import { Megrim } from 'next/font/google';
import styles from "./page.module.css";
import React from 'react';

const megrim = Megrim({ subsets: ['latin'], weight: '400' });

export default function ClockPage() {
    const [time, setTime] = useState<string[]>(new Date().toLocaleTimeString("uk-GB", {hour12: false}).replace(/\D/g, "").split(""));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString("uk-GB", {hour12: false}).replace(/\D/g, "").split(""));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.clock}>
                <div className={`${styles.top} ${megrim.className}`}>
                    {time.map((digit, i) => (
                        <React.Fragment key={`group-${i}`}>
                            <div className={styles.digitTube}>
                            {Array.from({ length: 10 }, (_, number) => (
                                <div
                                key={number}
                                className={`${styles.digit} ${
                                    number === +digit ? styles.active : styles.inactive
                                }`}
                                >
                                {number}
                                </div>
                            ))}
                            </div>

                            {(i + 1) % 2 === 0 && i !== time.length - 1 && (
                            <div key={`sep-${i}`} className={styles.separator}>:</div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className={styles.base}></div>
            </div>
        </div>
    );
}