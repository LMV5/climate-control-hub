"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// const StyledNav = styled.nav`
//   display: flex;
//   gap: 2rem;
// `;

// const StyledLink = styled(Link)`
//   position: relative;
//   padding: 0.5rem 1rem;
//   color: #ebd8da;
//   letter-spacing: 0.2rem;

//   &:after {
//     content: "";
//     position: absolute;
//     width: 0;
//     height: 0.1rem;
//     bottom: 0;
//     left: 0;
//     background-color: #cef7a0;
//     transition: width 0.4s ease;
//   }

//   &:hover::after {
//     width: 100%;
//   }

//   &[data-active="true"]::after {
//     width: 100%;
//   }
// `;

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex h-[2.3rem] gap-8">
      <NavLink href="/" isActive={pathname === "/"}>
        Home page
      </NavLink>
      <NavLink
        href="/room"
        isActive={pathname === "/room" || pathname.startsWith("/room/")}
      >
        Rooms
      </NavLink>
      <NavLink href="/history" isActive={pathname === "/history"}>
        History
      </NavLink>
      <NavLink href="/settings" isActive={pathname === "/settings"}>
        Settings
      </NavLink>
    </nav>
  );
}

function NavLink({ href, children, isActive }) {
  return (
    <Link
      href={href}
      className={`text-paleRed relative px-4 py-2 tracking-widest ${
        isActive ? "after:w-full" : "after:w-0"
      } after:bg-aquamarine after:duration-400 after:absolute after:bottom-0 after:left-0 after:h-[0.1rem] after:transition-all after:content-[''] hover:after:w-full`}
    >
      {children}
    </Link>
  );
}
