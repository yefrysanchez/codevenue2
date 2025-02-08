import React from "react";

const Hero = () => {
  return (
    <section className="bg-darkAlt p-4 rounded-lg">
      <h1 className="font-bold mb-2 tracking-tighter capitalize text-2xl">
        Welcome to CodeVenue
      </h1>
      <p className="mb-2 ">
        In CodeVenue coding meets creativity through the soothing sounds of lofi
        music. Designed with developers in mind, our platform offers a curated
        selection of lofi beats to enhance your coding sessions and foster
        productivity.
      </p>
      <p className="mb-4">
        We recognize the importance of creating the right ambiance for deep
        focus and concentration. Our collection features meticulously curated
        tracks from talented artists worldwide, chosen specifically to
        complement your coding workflow.
      </p>
      <div className="text-xs text-end">
        <span>Made with ❤️ by</span>{" "}
        <a
          className="font-bold"
          href="https://www.linkedin.com/in/yefrysanchez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yefry Sanchez
        </a>
      </div>
    </section>
  );
};

export default Hero;
