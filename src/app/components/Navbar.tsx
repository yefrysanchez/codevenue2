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

const Navbar = () => {
  const navlinks = [
    { title: "home", link: "/", icon: <HiHome size={20} /> },
    { title: "favorites", link: "/favorites", icon: <MdFavorite size={20} /> },
    { title: "songs", link: "/songs", icon: <IoMusicalNotes size={20} /> },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="z-50">
      <nav className="p-4 flex lg:flex-col justify-between items-center lg:w-fit gap-4">
        <div>
          <Image width={32} height={32} src={"/logo.png"} alt="logo" />
        </div>
        <ul className="hidden bg-darkAlt w-fit p-4 lg:flex flex-col gap-4 rounded-2xl">
          {navlinks.map((link) => (
            <li className="text-light/60" key={link.link}>
              <Link
                className="group capitalize flex items-center gap-x-1"
                href={`${link.link}`}
              >
                <span className="group-hover:text-primary transition-colors">
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
            className="text-light/60 hover:text-primary transition-colors"
          >
            <FaUser size={20} />
          </Link>
          <button className="text-red-800 hover:text-red-500 transition-colors">
            <CiLogout size={20} />
          </button>
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
