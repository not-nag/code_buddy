import styles from "../../styles/header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.header}>
      <Image
        className={styles.logo}
        src="/logo.png"
        width={147}
        height={80}
      ></Image>
      <div className={styles.people}></div>
    </div>
  );
}
