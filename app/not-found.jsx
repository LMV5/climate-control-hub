"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function error() {
  const router = useRouter();

  function handleBack() {
    router.back();
  }
  return (
    <div role="alert">
      <p>The page you are looking for does not exist</p>;
      <div>
        <Button variant="back" onClick={handleBack}>
          &larr; Back
        </Button>
      </div>
    </div>
  );
}
