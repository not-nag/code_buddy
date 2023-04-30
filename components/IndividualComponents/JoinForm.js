import { useState } from "react";
import styles from "../../styles/join_form.module.css";
import { useRouter } from "next/router";
import LoadingScreen from "./LoadingScreen";
import { useContext } from "react";
import { UserContext } from "../Context/UserAuth";

export default function JoinForm() {
  const { setUser, setDisplayId, setDisplayPass } = useContext(UserContext);

  const router = useRouter();
  const [roomId, setRoomId] = useState("");
  const [roomPassword, setRoomPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  async function handleClick() {
    setLoading(true);
    const response = await fetch("/api/create-room", {
      method: "POST",
    });

    if (response.ok) {
      const data = await response.json();
      setDisplayId(data.roomId);
      setDisplayPass(data.password);
      router.push(`/${data.roomId}`);
      setUser(true);
      setLoading(false);
    } else {
      console.log("Failed to create room");
    }
  }

  if (isLoading) return <LoadingScreen></LoadingScreen>;

  return (
    <div className={styles.form_parent}>
      <h1 className={styles.h1}>Enter the details to join a Room</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.p}>Enter the Room ID</p>
        <input
          type="text"
          name="room_id"
          className={styles.input}
          placeholder="Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          required
        />
        <p className={styles.p}>Enter the Room password</p>
        <input
          type="text"
          name="room_password"
          className={styles.input}
          placeholder="Room Password"
          value={roomPassword}
          onChange={(e) => setRoomPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit" className={styles.join_button}>
          Join Room
        </button>
      </form>
      <div className={styles.leftright}>
        <div className={styles.leftline}></div>
        <h1 className={styles.h1}>OR</h1>
        <div className={styles.rightline}></div>
      </div>
      <button onClick={handleClick} className={styles.create_button}>
        Click here to create a Room
      </button>
    </div>
  );
}
