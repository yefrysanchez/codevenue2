"use client";
import Image from "next/image";
import LikeBtn from "./LikeBtn";
import { IoIosPlay } from "react-icons/io";

const SongCards = () => {
  return (
    <div className="bg-darkAlt p-4 grid grid-cols-3 md:grid-cols-6 lg:rounded-xl">
      <div className="flex gap-4 col-span-2 md:col-span-3">
        <Image
          src={"/sample-track.png"}
          width={39}
          height={39}
          alt="song picture"
          className="h-10 w-10"
        />
        <LikeBtn />
        <div className="flex flex-col ">
          <span className="font-semibold">Golden age of 80s</span>
          <span className="font-extralight text-light/80 text-sm">
            Sean Swadder
          </span>
        </div>
      </div>

      <div className="md:flex items-center hidden">
        <span>Pop</span>
      </div>
      <div className="md:flex hidden items-center">
        <span>3:45</span>
      </div>
      <button className="flex items-center justify-end">
        <IoIosPlay size={30} />
      </button>
    </div>
  );
};

export default SongCards;
