import styles from "../../styles/join_form.module.css";

export default function JoinForm() {
  return (
    <div className={styles.form_parent}>
      <form>
        <label htmlFor="room_id">Enter the Room ID</label>
        <input type="text" name="room_id" />
        <label htmlFor="room_password">Enter the room password</label>
        <input type="text" name="room_password" />
      </form>
    </div>
  );
}
