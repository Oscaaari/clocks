'use client'

import { useState, useEffect, useRef } from 'react';
import { Roboto_Mono } from 'next/font/google';
import styles from "./page.module.css";

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: '400' });

const sentences = [
  "Next stop: The Z-Index clearing",
  "PLEASE REMEMBER TO FASTEN YOUR SEATBELT!",
];

export default function BusDisplayPage() {
    const textRef = useRef<HTMLParagraphElement>(null);
    const displayRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);
    const [mode, setMode] = useState<"static" | "sliding">("static");
    const [currentText, setCurrentText] = useState("");

    const staticDuration = 3000;
    const slideDuration = 6000;

    useEffect(() => {
        const text = textRef.current;
        const display = displayRef.current;
        if (!text || !display) return;

        let slideCounter = 0;

        const runSequence = () => {
            setMode("static");
            setIndex(0);
            setCurrentText(new Intl.DateTimeFormat("en-GB", {
                hour12: false,
                timeZone: "Europe/Riga",
                hour: "2-digit",
                minute: "2-digit",
            }).format(new Date()));

            text.style.transition = "none";
            text.style.transform = "translateY(-50%) translateX(0)";

            setTimeout(() => {
                setCurrentText(new Date().toLocaleDateString("en-GB"));

                text.style.transition = "none";
                text.style.transform = "translateY(-50%) translateX(0)";

                setTimeout(() => {
                    setMode("sliding");
                    slideNext();
                }, staticDuration);
            }, staticDuration);
        };

        const slideNext = () => {
            if (!text || !display) return;

            if (slideCounter >= 2) {
                slideCounter = 0;
                runSequence();
                return;
            }

            setIndex(slideCounter % sentences.length);

            requestAnimationFrame(() => {
                const displayWidth = display.offsetWidth;
                const textWidth = text.offsetWidth;

                text.style.transition = "none";
                text.style.transform = `translateY(-50%) translateX(${displayWidth}px)`;
                void text.offsetWidth;

                text.style.transition = `transform ${slideDuration}ms linear`;
                text.style.transform = `translateY(-50%) translateX(${-textWidth - displayWidth}px)`;

                slideCounter++;

                setTimeout(() => {
                    slideNext();
                }, slideDuration);
            });
        };

        runSequence();
    }, []);


    return (
        <div className={`${styles.mainContainer} ${robotoMono.className}`}>
            <img alt="Image of the inside of a bus" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Bus_interior_in_Quebec_city%2C_Canada.jpg" />
            <div className={styles.displayContainer}>
                <div className={styles.displayHolds}></div>
                <div className={styles.display} ref={displayRef}>
                    <div className={styles.displayLines}></div>
                    <p 
                        ref={textRef}
                        className={`${mode === "sliding" ? styles.sliding : styles.static}`}
                    >{mode === "static" ? currentText : sentences[index]}</p>
                </div>
            </div>
        </div>
    );
}