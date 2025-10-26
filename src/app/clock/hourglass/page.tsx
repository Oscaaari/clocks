'use client'

import { Sixtyfour } from 'next/font/google';
import styles from "./page.module.css";

const nabla = Sixtyfour({ subsets: ['latin'], weight: '400' });

export default function HourglassPage() {

    return (
        <div className={styles.mainContainer}>            
           <div className={styles.cube}>
                <div className={`${styles.side} ${styles.top}`}></div>
                <div className={`${styles.side} ${styles.front} ${styles.higher}`}></div>
                <div className={`${styles.side} ${styles.back} ${styles.higher}`}></div>
                <div className={`${styles.side} ${styles.right} ${styles.higher}`}></div>
                <div className={`${styles.side} ${styles.left} ${styles.higher}`}></div>

                <div className={`${styles.side} ${styles.front} ${styles.higherBase}`}></div>
                <div className={`${styles.side} ${styles.back} ${styles.higherBase}`}></div>
                <div className={`${styles.side} ${styles.right} ${styles.higherBase}`}></div>
                <div className={`${styles.side} ${styles.left} ${styles.higherBase}`}></div>


                <div className={`${styles.side} ${styles.front} ${styles.lower}`}></div>
                <div className={`${styles.side} ${styles.back} ${styles.lower}`}></div>
                <div className={`${styles.side} ${styles.right} ${styles.lower}`}></div>
                <div className={`${styles.side} ${styles.left} ${styles.lower}`}></div>
                <div className={`${styles.side} ${styles.bottom}`}></div>

                <div className={`${styles.side} ${styles.front} ${styles.lowerBase}`}></div>
                <div className={`${styles.side} ${styles.back} ${styles.lowerBase}`}></div>
                <div className={`${styles.side} ${styles.right} ${styles.lowerBase}`}></div>
                <div className={`${styles.side} ${styles.left} ${styles.lowerBase}`}></div>
           </div>

           <p className={`${styles.title} ${nabla.className}`}>Time</p>
        </div>
    );
}