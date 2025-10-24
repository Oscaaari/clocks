'use client'

import { useState, useEffect } from 'react';
import { Sour_Gummy } from 'next/font/google';
import styles from "./page.module.css";

const sourGummy = Sour_Gummy({ subsets: ['latin'], weight: '400' });

export default function PhysicalClockPage() {
    const digits = Array.from({ length: 12 }, (_, i) => i + 1);



    return (
        <div className={`${styles.mainContainer} ${sourGummy.className}`}>            
            <div className={styles.clock}>
                {digits.map((digit) => (
                    <p
                        key={digit}
                        style={{ '--digit': digit } as React.CSSProperties}
                        className={styles.digit}
                    >
                        {digit}
                    </p>
                ))}
                <div className={styles.clockCenterPoint}></div>
                <div className={`${styles.clockHand} ${styles.secondHand}`}></div>
                <div className={`${styles.clockHand} ${styles.minuteHand}`}></div>
                <div className={`${styles.clockHand} ${styles.hourHand}`}></div>
            </div>
        </div>
    );
}