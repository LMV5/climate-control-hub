"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex h-[2.3rem] gap-8">
       <button
        className="block sm:hidden p-6 focus:outline-none text-2xl font-bold text-paleYellow"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? "" : <FaBars />}
      </button>
      <ul
        className={`z-50 text-2xl sm:text-xl flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 absolute sm:static top-0 left-0 w-full h-screen sm:h-auto bg-gray-800 sm:bg-transparent p-6 sm:p-0 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        onClick={closeMenu}
      >
        <button
        className="absolute top-4 right-4 p-2 text-2xl font-bold text-paleYellow focus:outline-none sm:hidden"
        onClick={closeMenu}
        aria-label="Close menu"
      >
        <FaTimes />
      </button>
        
        <li>
          <NavLink href="/" isActive={pathname === "/"}>
            Home page
          </NavLink>
        </li>
  
        <li>
          <NavLink
            href="/room"
            isActive={pathname === "/room" || pathname.startsWith("/room/")}
            >
            Rooms
          </NavLink>
        </li>
     
        <li>
          <NavLink href="/history" isActive={pathname === "/history"}>
              History
          </NavLink>
        </li>
        <li>
            <NavLink href="/settings" isActive={pathname === "/settings"}>
              Settings
            </NavLink>
        </li>
     </ul>
    </nav>
  );
}

function NavLink({ href, children, isActive }) {
  return (
    <Link
      href={href}
      className={`text-paleGrey relative px-4 py-2 tracking-widest ${
        isActive ? "after:w-full" : "after:w-0"
      } after:bg-aquamarine after:duration-400 focus:border-paleYellow transition ease-in after:absolute after:bottom-0 after:left-0 after:h-[0.1rem] after:transition-all after:content-[''] hover:after:w-full`}
    >
      {children}
    </Link>
  );
}
