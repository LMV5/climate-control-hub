"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      <H1>Welcome to Climate Control Hub!</H1>
      <Button onClick={handleClick} variant="primary">
        Manage Rooms &rArr;
      </Button>
    </Container>
  );
}
