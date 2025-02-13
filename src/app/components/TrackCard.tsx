"use client";
import Image from "next/image";
import LikeBtn from "./LikeBtn";

const TrackCard = () => {
  const handlePlay = () => {
    console.log("playing track");
  };

  return (
    <div
      className="relative lg:flex gap-4 shrink-0 bg-darkAlt p-4 h-[233px] lg:h-auto w-full max-w-[323px] lg:max-w-[600px] rounded-lg"
      role="group"
      aria-labelledby="track-title"
    >
      {/* Track Image */}
      <div onClick={handlePlay} className="mb-4 lg:mb-0 cursor-pointer">
        <Image
          src="/sample-track.png"
          alt="Album cover of Golden age of 80s"
          width={108}
          height={99}
          className="rounded-t-lg"
        />
      </div>

      {/* Track Info */}
      <div onClick={handlePlay} className="flex cursor-pointer flex-col">
        <span className="font-semibold">Golden age of 80s</span>
        <span className="font-extralight text-light/80 text-sm">
          Sean Swadder
        </span>
        <span className="mt-4">3:45</span>
      </div>

      {/* Like Button */}
      <div className="absolute  right-4 top-4 lg:bottom-4 lg:top-auto">
        <LikeBtn />
      </div>
    </div>
  );
};

export default TrackCard;
