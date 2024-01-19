import Card from "@/app/Components/card";
import Link from "next/link";
export default function Notification() {
  return (
    <>
      <Card>
        <Link href="/Dashboard/notificationScreen">
          Tap to see the notification
        </Link>
      </Card>
    </>
  );
}
