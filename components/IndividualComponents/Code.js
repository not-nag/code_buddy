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
      <div className={styles.iframe}>
        <div className={styles.iframe_heading}>OUTPUT</div>
        <iframe
          frameborder="0"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}
