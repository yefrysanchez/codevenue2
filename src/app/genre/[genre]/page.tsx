import SongCards from "@/app/components/SongCards";
import { genres } from "@/app/data/genres";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosPlay } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

const GenrePage = async ({ params }: { params: { genre: string } }) => {
  const { genre } = await params;
  const genreData = genres.find((g) => g.link === "/genre/" + genre);

  if (!genreData) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold">Genre not found</h2>
        <p className="mt-2 text-gray-500">
          The genre you are looking for does not exist.
        </p>
        <Link
          href="/songs"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Back to Genres
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4">
      <Link
        href="/songs"
        className="hover:opacity-80 transition-opacity px-4 py-2 bg-darkAlt text-white rounded-lg w-fit mb-4 flex items-center gap-1 "
      >
        <IoArrowBack size={20} />
        <span>Back to Genres</span>
      </Link>
      <section className="flex flex-col lg:flex-row gap-4 items-center mb-4">
        <div className="relative select-none  w-fit rounded-xl overflow-hidden">
          <Image
          priority
            className="h-[270px] w-[780px] lg:w-[500px] object-cover rounded-lg"
            src={genreData.img}
            height={427}
            width={640}
            alt="Genre Cover"
          />
          <h3 className="z-20 text-7xl text-center absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] tracking-tighter font-bold">
            {genreData.title}
          </h3>
          <div className="bg-black/50 absolute inset-0 z-10"></div>
        </div>
        <div>
          <h2 className="text-3xl text-center lg:text-start lg:text-5xl tracking-tighter font-bold mt-4">
            {genreData.title}
          </h2>
          <p className="text-gray-600 text-center max-w-lg mt-2">
            {genreData.description}
          </p>
          <button
            aria-label="Play track"
            className="flex items-center bg-secundary px-4 py-2 rounded-full mt-4 hover:opacity-80 transition-opacity"
          >
            <IoIosPlay size={30} /> Play All
          </button>
        </div>
      </section>
      <section className="pb-40 grid gap-2">
        <SongCards />
        <SongCards />
        <SongCards />
        <SongCards />
        <SongCards />
        <SongCards />
        <SongCards />
        <SongCards />
      </section>
    </div>
  );
};

export default GenrePage;
