import { Suspense } from "react";
import { connection } from "next/server";

async function NavDate() {
  await connection();

  const date = new Date().toLocaleDateString("bn-BD", {
    timeZone: "Asia/Dhaka",
    dateStyle: "full",
  });

  return <p className="text-xs text-base-content">{date}</p>;
}

export default NavDate;