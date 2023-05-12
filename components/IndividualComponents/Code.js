import styles from "../../styles/code.module.css";
import TextareaWithLineNumbers from "./TextAreaWithLine";
import { useState, useEffect } from "react";
import DataContext from "../Context/context";
import socket from "@/utils/socket";
export default function Code() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [updateHtml, setUpdateHtml] = useState("");
  const [updateCss, setUpdateCss] = useState("");
  const [updateJs, setUpdateJs] = useState("");

  useEffect(() => {
    socket.on("html", (value) => {
      setHtml(value);
      setUpdateHtml(value);
    });

    socket.on("css", (value) => {
      setCss(value);
      setUpdateCss(value);
    });

    socket.on("js", (value) => {
      setJs(value);
      setUpdateJs(value);
    });
  }, [updateCss, updateHtml, updateJs]);

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
          <TextareaWithLineNumbers
            name="html"
            lang={html}
          ></TextareaWithLineNumbers>
        </div>
        <div className={styles.edit_child}>
          <div className={styles.heading}>CSS</div>
          <TextareaWithLineNumbers
            name="css"
            lang={css}
          ></TextareaWithLineNumbers>
        </div>
        <div className={styles.edit_child}>
          <div className={styles.heading}>JavaScript</div>
          <TextareaWithLineNumbers
            name="js"
            lang={js}
          ></TextareaWithLineNumbers>
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
