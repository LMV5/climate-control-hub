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
      <h1 className="text-paleGrey mb-6 text-center text-3xl uppercase tracking-wide pl-2 pr-2">
        Welcome to Climate Control Hub!
      </h1>
      <Button onClick={handleClick} variant="primary">
        Manage Rooms &rArr;
      </Button>
    </div>
  );
}
