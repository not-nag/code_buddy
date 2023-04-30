import styles from "../../styles/loading.module.css";

export default function LoadingScreen() {
  return (
    <div className={styles.screen}>
      <div className={styles.loader}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
}
