import styles from "../../styles/code.module.css";

export default function Code() {
  return (
    <>
      <div className={styles.edit}>
        <div className={styles.edit_child}>
          <div className={styles.heading}></div>
        </div>
        <div className={styles.edit_child}>
          <div className={styles.heading}></div>
        </div>
        <div className={styles.edit_child}>
          <div className={styles.heading}></div>
        </div>
      </div>
      <div className={styles.output}>I display output</div>
    </>
  );
}
