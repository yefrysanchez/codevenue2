import Image from "next/image";
import React from "react";
import PlayerControls from "./PlayerControls";
import { IoIosVolumeHigh } from "react-icons/io";

const Player = () => {
  return (
    <div className="w-full z-50 h-32 bg-darkAlt/50 shadow-md px-4 lg:pr-0 lg:pl-20 backdrop-blur-md fixed bottom-0 left-0">
      <div className="max-w-6xl h-full mx-auto flex items-center">
        {/* Track info */}
        <div className="flex items-center gap-4 h-full w-full md:w-auto">
          <div>
            <Image
              width={49}
              height={49}
              alt="Song image"
              src={"/sample-track.png"}
            />
          </div>
          <div className="flex flex-col">
            <span id="track-title" className="font-semibold">
              Golden age of 80s
            </span>
            <span className="font-extralight text-light/80 text-sm">
              Sean Swadder
            </span>
          </div>
        </div>
        {/* Player controls */}
        <PlayerControls />
        {/* Volume control */}
        <div className="hidden md:flex items-center">
          <span className="text-light/80">
            <IoIosVolumeHigh size={30} />
          </span>
          <input
            aria-label="Volume"
            type="range"
            name="volume"
            className="w-24"
            min={0}
            max={100}
            defaultValue={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
