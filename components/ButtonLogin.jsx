"use client";
import { useRouter } from "next/navigation";

export default function ButtonLogin() {
  const router = useRouter();

  return <button onClick={() => router.push("/login")}>LOG IN</button>;
}
