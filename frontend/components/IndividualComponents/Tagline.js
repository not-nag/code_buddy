import styles from "../../styles/tagline.module.css";

export default function TagLine() {
  const text = "(with)";
  return (
    <h1 className={styles.h1}>
      <span className={styles.a}>Code </span>
      <span className={styles.b}>{text} </span>
      <span className={styles.c}>buddy </span>
      <p className={styles.d}>Collaborative Real-time code editor</p>
    </h1>
  );
}
