import { UserAuth } from "@/components/Context/UserAuth";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <UserAuth>
      <Component {...pageProps} />
    </UserAuth>
  );
}
