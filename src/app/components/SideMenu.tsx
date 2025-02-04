import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import { CiLogout } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { IoClose, IoMusicalNotes } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";

type SideMenuProps = {
  setIsOpen: (isOpen: boolean) => void;
};

const SideMenu = ({ setIsOpen }: SideMenuProps) => {
  const navlinks = [
    { title: "home", link: "/", icon: <HiHome /> },
    { title: "favorites", link: "/favorites", icon: <MdFavorite /> },
    { title: "songs", link: "/songs", icon: <IoMusicalNotes /> },
    { title: "profile", link: "/profile", icon: <FaUser /> },
  ];

  const router = useRouter();
  const handleLogout = () => {
    // logout
    setIsOpen(false);
    router.push("/");
  };

  return (
    <div className="fixed lg:hidden text-3xl top-0 left-0 right-0 bottom-0 w-full h-full bg-primary/30 backdrop-blur-sm flex flex-col justify-center items-center gap-4">
      <ul className="flex flex-col  gap-8">
        {navlinks.map((link) => (
          <li onClick={() => setIsOpen(false)} key={link.link}>
            <Link
              href={`${link.link}`}
              className="flex items-center gap-4"
            >
              <span>{link.icon}</span>
              <span className="capitalize">{link.title}</span>
            </Link>
          </li>
        ))}
        <button className="flex justify-center bg-red-600 px-12 py-2 rounded-2xl">
          <CiLogout />
        </button>
      </ul>
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 text-3xl"
      >
        <IoClose />
      </button>
    </div>
  );
};

export default SideMenu;
