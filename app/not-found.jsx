"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function error() {
  const router = useRouter();

  function handleBack() {
    router.back();
  }
  return (
    <div role="alert" className="flex flex-col items-center mt-5 rounded-lg p-4 shadow-[0_1px_5px_rgba(178,178,178,0.2)]">
      <p className="text-paleRed mb-4 pb-3 text-center text-lg uppercase tracking-widest">The page you are looking for does not exist</p>
        <Button variant="back" onClick={handleBack}>
          &larr; Back
        </Button>
    </div>
  );
}
