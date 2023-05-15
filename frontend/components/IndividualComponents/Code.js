import styles from "../../styles/code.module.css";
import TextareaWithLineNumbers from "./TextAreaWithLine";
import { useState, useEffect, useContext } from "react";
import DataContext from "../Context/context";
import socket from "@/utils/socket";
import { UserContext } from "../Context/UserAuth";
import axios from "axios";

export default function Code() {
  var h = "";
  var c = "";
  var j = "";
  const { displayId } = useContext(UserContext);
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  useEffect(() => {
    async function refresh() {
      try {
        const response = await axios.get(`http://localhost:3001/${displayId}`);
        if (response.data.obj1) {
          h = response.data.obj1.toString();
        }
        if (response.data.obj2) {
          c = response.data.obj2.toString();
        }
        if (response.data.obj3) {
          j = response.data.obj3.toString();
        }
        setHtml(h);
        setCss(c);
        setJs(j);
      } catch (err) {
        console.log(err);
      }
    }
    refresh();

    socket.on("html", (value) => {
      setHtml(value);
    });

    socket.on("css", (value) => {
      setCss(value);
    });

    socket.on("js", (value) => {
      setJs(value);
    });
  }, []);

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
