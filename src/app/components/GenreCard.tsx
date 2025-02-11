import Image from "next/image";
import Link from "next/link";
import React from "react";

type GenreCardProps = {
  link: string;
  title: string;
  img: string;
};

const GenreCard = ({ link, title, img }: GenreCardProps) => {
  return (
    <Link href={link} >
      <div className="relative hover:opacity-80 transition-opacity duration-300 w-fit rounded-xl overflow-hidden cursor-pointer group">
        <Image
          className="h-[270px] w-[500px] object-cover rounded-lg"
          src={img}
          height={427}
          width={640}
          alt="Genre Cover"
        />
        <h3 className="z-20 text-4xl text-center absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] tracking-tighter font-bold">
          {title}
        </h3>
        <div className="bg-black/50 absolute inset-0 z-10"></div>
      </div>
    </Link>
  );
};

export default GenreCard;
