"use client";

import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const LikeBtn = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <button
      onClick={() => setIsLiked(!isLiked)}
      className="active:opacity-70 focus:outline-none rounded-full p-1"
      aria-label={isLiked ? "Unlike track" : "Like track"}
      aria-pressed={isLiked}
    >
      {isLiked ? (
        <FaHeart className="text-secundary" size={25} />
      ) : (
        <FaRegHeart size={25} />
      )}
    </button>
  );
};

export default LikeBtn;
