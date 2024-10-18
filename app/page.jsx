"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  function handleClick() {
    router.push("/room");
  }

  return (
    <div className="flex flex-col items-center pt-20">
      <h1 className="text-paleRed mb-6 text-3xl uppercase tracking-wide">
        Welcome to Climate Control Hub!
      </h1>
      <Button onClick={handleClick} variant="primary">
        Manage Rooms &rArr;
      </Button>
    </div>
  );
}
