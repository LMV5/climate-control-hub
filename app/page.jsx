"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const H1 = styled.h1`
  color: #ebd8da;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  padding-top: 5rem;
`;

export default function Page() {
  const router = useRouter();

  function handleClick() {
    router.push("/room");
  }

  return (
    <>
      <H1>Welcome to Climate Control Hub!</H1>
      <Button onClick={handleClick} variant="primary">
        Manage Rooms &rArr;
      </Button>
    </>
  );
}
