import React from "react";
import GenreCard from "./GenreCard";
import { genres } from "../data/genres";

const Genres = () => {
  return (
    <section className="mt-8">
      <h2 className="font-bold mb-8 tracking-tighter text-4xl">Genres</h2>
      <div className="grid grid-cols-2 gap-4  lg:grid-cols-3">
        {genres.map((genre, index) => (
          <GenreCard
            key={index}
            link={genre.link}
            title={genre.title}
            img={genre.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Genres;


