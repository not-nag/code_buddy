import styles from "../../styles/code.module.css";
import TextareaWithLineNumbers from "./TextAreaWithLine";

export default function Code() {
  return (
    <>
      <div className={styles.edit}>
        <div className={styles.edit_child}>
          <div className={styles.heading}>HTML</div>
          <TextareaWithLineNumbers></TextareaWithLineNumbers>
        </div>
        <div className={styles.edit_child}>
          <div className={styles.heading}>CSS</div>
          <TextareaWithLineNumbers></TextareaWithLineNumbers>
        </div>
        <div className={styles.edit_child}>
          <div className={styles.heading}>JavaScript</div>
          <TextareaWithLineNumbers></TextareaWithLineNumbers>
        </div>
      </div>
      <div className={styles.iframe}>
        <div className={styles.iframe_heading}>OUTPUT</div>
        <iframe
          title="output"
          frameborder="0"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}
