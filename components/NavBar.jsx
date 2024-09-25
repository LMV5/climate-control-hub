"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export default function NavBar() {
  const pathname = usePathname();

  return (
    <StyledNav>
      <Link href="/" className={`${pathname === "/" ? "active" : ""}`}>
        Home page
      </Link>
      <Link href="/room" className={`${pathname === "/room" ? "active" : ""}`}>
        Rooms
      </Link>
      <Link
        href="/history"
        className={`${pathname === "/history" ? "active" : ""}`}
      >
        History
      </Link>
      <Link
        href="/settings"
        className={`${pathname === "/settings" ? "active" : ""}`}
      >
        Settings
      </Link>
      <Link
        href="/login"
        className={`${pathname === "/login" ? "active" : ""}`}
      >
        Login
      </Link>
    </StyledNav>
  );
}
