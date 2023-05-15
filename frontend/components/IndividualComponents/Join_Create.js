import styles from "../../styles/join_create.module.css";
import TagLine from "./Tagline";
import JoinForm from "./JoinForm";

export default function Join_Create() {
  return (
    <div className={styles.parent}>
      <TagLine></TagLine>
      <JoinForm></JoinForm>
    </div>
  );
}
