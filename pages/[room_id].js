import Editor from "@/components/Editor";
import { useRouter } from "next/router";

export default function IDE() {
  const router = useRouter();
  const room_id = router.query.room_id;

  //
  return (
    <>
      <Editor></Editor>
    </>
  );
}
