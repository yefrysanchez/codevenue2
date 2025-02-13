import React from "react";
import Hero from "../components/Hero";
import { quotes } from "../data/quotes";
import { IoIosPlay } from "react-icons/io";
import SongCards from "../components/SongCards";

const Favorites = () => {
  const num = Math.floor(Math.random() * quotes.length);

  return (
    <>
      <section className="flex flex-col lg:flex-row items-center mb-12">
        <Hero />

        <div className="w-full p-4 relative">
          <h2 className="text-3xl lg:text-6xl mb-4 tracking-tighter capitalize font-bold">
            Your favorites Songs
          </h2>
          <p className="lg:w-2/3">{quotes[num].quote}</p>
          <button
            aria-label="Play track"
            className="flex items-center bg-secundary px-4 py-2 rounded-full mt-4 hover:opacity-80 transition-opacity"
          >
            <IoIosPlay size={30} /> Play All
          </button>
        </div>
      </section>
      <section className="grid gap-2 pb-40">
        <SongCards />
        <SongCards />
        <SongCards />
        <SongCards />
        <SongCards />
        <SongCards />
        <SongCards />
        <SongCards />
        <SongCards />
      </section>
    </>
  );
};

export default Favorites;
