import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
        <a className={styles.previewA} href="/clock/nixie">
          <div className={styles.previewWrapper}>
            <Image src="/page-preview/nixie.png" alt="Nixie tube clock" fill className={styles.previewImage}/>
          </div>
        </a>
        <a className={styles.previewA} href="/clock/physical">
          <div className={styles.previewWrapper}>
            <Image src="/page-preview/normal-clock.png" alt="Normal clock" fill className={styles.previewImage}/>
          </div>
        </a>
        <a className={styles.previewA} href="/clock/hourglass">
          <div className={styles.previewWrapper}>
            <Image src="/page-preview/hourglass.png" alt="Hourglass" fill className={styles.previewImage}/>
          </div>
        </a>
        <a className={styles.previewA} href="/display/bus">
          <div className={styles.previewWrapper}>
            <Image src="/page-preview/bus-display.png" alt="Nixie tube clock" fill className={styles.previewImage}/>
          </div>
        </a>
    </div>
  );
}
