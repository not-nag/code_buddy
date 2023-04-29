import Join_Create from "./IndividualComponents/Join_Create";
import styles from "../styles/create_page.module.css";
import Header from "./IndividualComponents/Header";

export default function CreateRoom() {
  return (
    <div className={styles.bg}>
      <Header></Header>
      <Join_Create></Join_Create>
    </div>
  );
}
