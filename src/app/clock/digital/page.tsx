'use client'

import { useState, useEffect } from 'react';
import { Stalinist_One } from 'next/font/google';
import styles from "./page.module.css";
import React from 'react';

const stalinistOne = Stalinist_One({ subsets: ['latin'], weight: '400' });

export default function DigitalClockPage() {

    

    return (
        <div className={`${styles.mainContainer} ${stalinistOne.className}`}>
            <div className={styles.clock}>
                {Array.from({ length: 6 }, (_, digitColumn) => (
                    <div key={digitColumn}>
                        {Array.from({ length: 10 }, (_, digit) => (
                            <div
                                key={digit}
                                className={styles.digit}
                            >
                                {digit}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}