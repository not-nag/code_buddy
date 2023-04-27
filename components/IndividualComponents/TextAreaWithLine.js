import React, { useState, useRef, useEffect, useContext } from "react";
import styles from "../../styles/code.module.css";
import DataContext from "../Context/context";

function TextareaWithLineNumbers(props) {
  const val = useContext(DataContext);
  const name = props.name;

  const [value, setValue] = useState("");
  const editorRef = useRef(null);
  const lineNumbersRef = useRef(null);

  function updateLineNumbers() {
    const lines = value.split("\n");
    lineNumbersRef.current.innerHTML = lines
      .map((line, index) => index + 1)
      .join("<br>");
  }

  function handleScroll() {
    lineNumbersRef.current.scrollTop = editorRef.current.scrollTop;
  }

  function handleChange(event) {
    setValue(event.target.value);
    if (name == "html") {
      val.setHtml(event.target.value);
    } else if (name == "css") {
      val.setCss(event.target.value);
    } else if (name == "js") {
      val.setJs(event.target.value);
    }
  }
  function handleTab(e) {
    if (e.keyCode === 9) {
      // Tab key code is 9
      e.preventDefault(); // Prevent default behavior of moving to next element
      const input = e.target;
      const start = input.selectionStart;
      const end = input.selectionEnd;
      const text = "   "; // Insert 3 spaces
      input.value =
        input.value.substring(0, start) + text + input.value.substring(end);
      input.selectionStart = input.selectionEnd = start + text.length;
    }
  }

  useEffect(() => {
    updateLineNumbers();
  }, [value]);

  return (
    <div
      className=""
      style={{
        position: "relative",
        width: "100%",
        height: "200px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "space-between",
      }}
    >
      <div
        ref={lineNumbersRef}
        style={{
          left: 0,
          top: 3,
          width: "30px",
          height: "320px",
          fontFamily: "monospace",
          fontSize: "16px",
          color: "#999",
          textAlign: "center",
          pointerEvents: "none",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      />
      <textarea
        spellCheck={false}
        onKeyDown={handleTab}
        className={styles.textarea}
        ref={editorRef}
        value={value}
        onChange={handleChange}
        onScroll={handleScroll}
        style={{
          top: 0,
          paddingTop: "0px",
          right: 0,
          height: "100%",
          width: "95%",
          fontFamily: "monospace",
          fontSize: "16px",
          paddingLeft: "10px",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

export default TextareaWithLineNumbers;
