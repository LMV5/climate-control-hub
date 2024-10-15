"use client";

import Button from "@/components/Button";

export default function Page() {
  const handleClick = () => {
    window.location.href = "http://localhost:3000/room";
  };

  return (
    <main>
      <h1>Welcome to Climate Control Hub!</h1>
      <Button onClick={handleClick} variant="primary">
        Manage Rooms
      </Button>
    </main>
  );
}
