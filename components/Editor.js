import Header from "./IndividualComponents/Header";
import Code from "./IndividualComponents/Code";
import styles from "../styles/editor.module.css";

export default function Editor() {
  return (
    <div className={styles.background}>
      <Header></Header>
      <Code></Code>
    </div>
  );
}
