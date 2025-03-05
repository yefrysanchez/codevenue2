import React from "react";
import Genres from "../components/Genres";
import SongCards from "../components/SongCards";

const Songs = () => {
  return (
    <>
      <section className="mb-4">
        <Genres />
      </section>
      <section className="grid gap-2 ">
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

export default Songs;
