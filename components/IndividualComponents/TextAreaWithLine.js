import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/code.module.css";

function TextareaWithLineNumbers() {
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
