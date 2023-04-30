import Header from "./IndividualComponents/Header";
import Code from "./IndividualComponents/Code";
import { useEffect, useContext } from "react";
import { UserContext } from "./Context/UserAuth";

export default function Dev() {
  const { setUser, setDisplayId, setDisplayPass } = useContext(UserContext);
  useEffect(() => {
    window.onpopstate = () => {
      setUser(false);
      setDisplayId("");
    };

    window.onbeforeunload = () => {
      setUser(false);
      setDisplayPass("");
    };
  });

  return (
    <>
      <Header></Header>
      <Code></Code>
    </>
  );
}
