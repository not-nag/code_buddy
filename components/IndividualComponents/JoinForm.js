import styles from "../../styles/join_form.module.css";

export default function JoinForm() {
  return (
    <div className={styles.form_parent}>
      <h1 className={styles.h1}>Enter the details to join a room</h1>
      <form className={styles.form}>
        <p className={styles.p}>Enter the Room ID</p>
        <input
          type="text"
          name="room_id"
          className={styles.input}
          placeholder="Room ID"
          required
        />
        <p className={styles.p}>Enter the Room password</p>
        <input
          type="text"
          name="room_password"
          className={styles.input}
          placeholder="Room Password"
          required
        />
        <br />
        <button type="submit" className={styles.join_button}>
          Join Room
        </button>
      </form>
      <h1 className={styles.h1}>OR</h1>
      <button className={styles.create_button}>
        Click here to create a Room
      </button>
    </div>
  );
}
