"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
      } after:bg-aquamarine after:duration-400 focus:border-paleYellow transition ease-in after:absolute after:bottom-0 after:left-0 after:h-[0.1rem] after:transition-all after:content-[''] hover:after:w-full focus:shadow-[0_0_10px_rgba(243,249,210,1)]`}
    >
      {children}
    </Link>
  );
}
