import Header from "./IndividualComponents/Header";
import Code from "./IndividualComponents/Code";
import { useEffect, useContext } from "react";
import { UserContext } from "./Context/UserAuth";

export default function Dev() {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    window.onpopstate = () => {
      setUser(false);
    };

    window.onbeforeunload = () => {
      setUser(false);
    };
  });

  return (
    <>
      <Header></Header>
      <Code></Code>
    </>
  );
}
