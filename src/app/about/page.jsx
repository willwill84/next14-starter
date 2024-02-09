import Image from "next/image";
import styles from "./about.module.css"

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver, and better.</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl condimentum id venenatis a condimentum vitae sapien. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Aliquam sem et tortor consequat id.</p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Years of experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt="About Image" fill className={styles.img} />
            </div>
        </div>
    );
  };

  export default AboutPage;