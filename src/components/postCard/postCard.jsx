import Image from "next/image";
import styles from "./postCard.module.css"
import Link from "next/link";

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/20145987/pexels-photo-20145987/free-photo-of-a-person-riding-a-motorcycle-on-a-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Desc</p>
                <Link className={styles.link} href="/blog/post">READ MORE</Link>
            </div>
        </div>
    );
  };

  export default PostCard;