import styles from "../../styles/join_form.module.css";

export default function JoinForm() {
  return (
    <div className={styles.form_parent}>
      <h1 className={styles.h1}>Enter the details to join a room</h1>
      <form>
        <p className={styles.p}>Enter the Room ID</p>
        <input type="text" name="room_id" />
        <p className={styles.p}>Enter the room password</p>
        <input type="text" name="room_password" />
      </form>
      <h1 className={styles.h1}>OR</h1>
      <button>Click here to create a room</button>
    </div>
  );
}
