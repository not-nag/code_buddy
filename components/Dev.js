import Header from "./IndividualComponents/Header";
import Code from "./IndividualComponents/Code";
import { useEffect, useContext } from "react";
import { UserContext } from "./Context/UserAuth";
import socket from "@/utils/socket";

export default function Dev() {
  const { setUser, setDisplayId, setDisplayPass } = useContext(UserContext);
  useEffect(() => {
    window.onpopstate = () => {
      setUser(false);
      setDisplayId("");
      socket.disconnect;
    };

    window.onbeforeunload = () => {
      setUser(false);
      setDisplayPass("");
      socket.disconnect;
    };
  });

  return (
    <>
      <Header></Header>
      <Code></Code>
    </>
  );
}
