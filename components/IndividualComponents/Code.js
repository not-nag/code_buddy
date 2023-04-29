import styles from "../../styles/code.module.css";
import TextareaWithLineNumbers from "./TextAreaWithLine";
import { useState } from "react";
import DataContext from "../Context/context";
export default function Code() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const srcDoc = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `;

  return (
    <DataContext.Provider value={{ setHtml, setCss, setJs }}>
      <div className={styles.edit}>
        <div className={styles.edit_child}>
          <div className={styles.heading}>HTML</div>
          <TextareaWithLineNumbers name="html"></TextareaWithLineNumbers>
        </div>
        <div className={styles.edit_child}>
          <div className={styles.heading}>CSS</div>
          <TextareaWithLineNumbers name="css"></TextareaWithLineNumbers>
        </div>
        <div className={styles.edit_child}>
          <div className={styles.heading}>JavaScript</div>
          <TextareaWithLineNumbers name="js"></TextareaWithLineNumbers>
        </div>
      </div>
      <div className={styles.iframe}>
        <div className={styles.iframe_heading}>OUTPUT</div>
        <iframe
          srcDoc={srcDoc}
          title="output"
          frameBorder="0"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </DataContext.Provider>
  );
}
