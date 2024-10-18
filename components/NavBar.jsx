"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const StyledNav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  position: relative;
  padding: 0.5rem 1rem;
  color: #ebd8da;
  letter-spacing: 0.2rem;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.1rem;
    bottom: 0;
    left: 0;
    background-color: #cef7a0;
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &[data-active="true"]::after {
    width: 100%;
  }
`;

export default function NavBar() {
  const pathname = usePathname();

  return (
    <StyledNav>
      <StyledLink href="/" data-active={pathname === "/"}>
        Home page
      </StyledLink>
      <StyledLink
        href="/room"
        data-active={pathname === "/room" || pathname.startsWith("/room/")}
      >
        Rooms
      </StyledLink>
      <StyledLink href="/history" data-active={pathname === "/history"}>
        History
      </StyledLink>
      <StyledLink href="/settings" data-active={pathname === "/settings"}>
        Settings
      </StyledLink>
    </StyledNav>
  );
}
