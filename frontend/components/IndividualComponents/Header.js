import styles from "../../styles/header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../Context/UserAuth";

export default function Header() {
  const { displayId, displayPass } = useContext(UserContext);

  const router = useRouter();
  return (
    <div className={styles.header}>
      <Link href="/">
        <Image
          alt="Logo"
          className={styles.logo}
          src="/logo.png"
          width={147}
          height={80}
        ></Image>
      </Link>
      {router.pathname === "/[room_id]" ? (
        <div className={styles.people}>
          <p className={styles.roomid}>ID : {displayId}</p>
          <p className={styles.roompass}>Password : {displayPass}</p>
        </div>
      ) : null}
    </div>
  );
}
