"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { IoMusicalNotes } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import SideMenu from "./SideMenu";
import { TbMenu } from "react-icons/tb";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navlinks = [
    { title: "home", link: "/", icon: <HiHome size={20} /> },
    { title: "favorites", link: "/favorites", icon: <MdFavorite size={20} /> },
    { title: "songs", link: "/songs", icon: <IoMusicalNotes size={20} /> },
  ];

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(true);
  return (
    <header className="z-[1000] sticky left-0 top-0 ">
      <nav className="sticky bg-darkAlt lg:bg-transparent left-0 top-0 p-4 flex lg:flex-col justify-between items-center lg:w-fit gap-4">
        <div className="flex items-center gap-2">
          <Image width={32} height={32} src={"/logo.png"} alt="logo" />
          <span className="font-bold tracking-[-2px] text-3xl lg:hidden">
            CodeVenue
          </span>
        </div>
        <ul className="hidden bg-darkAlt w-fit p-4 lg:flex flex-col gap-4 rounded-2xl">
          {navlinks.map((link) => (
            <li className="text-light/60" key={link.link}>
              <Link
                className="group capitalize flex items-center gap-x-1"
                href={`${link.link}`}
              >
                <span className={`group-hover:text-primary transition-colors ${pathname === link.link ? "text-primary" : ""}`}>
                  {link.icon}
                </span>
                <span className="group-hover:text-light transition-colors lg:hidden">
                  {link.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="hidden bg-darkAlt w-fit p-4 lg:flex flex-col gap-4 rounded-2xl">
          <Link
            href={`/profile`}
            className={`text-light/60 hover:text-primary transition-colors ${pathname === "/profile" ? "text-primary" : ""}`}
          >
            <FaUser size={20} />
          </Link>
          {isLogged && (
            <button className="text-red-800 hover:text-red-500 transition-colors">
              <CiLogout size={20} />
            </button>
          )}
        </ul>
        <button onClick={() => setIsOpen(true)} className="lg:hidden">
          <TbMenu size={25} />
        </button>
        {isOpen && <SideMenu setIsOpen={setIsOpen} />}
      </nav>
    </header>
  );
};

export default Navbar;
