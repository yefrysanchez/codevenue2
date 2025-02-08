import { CiSearch } from "react-icons/ci";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen w-full p-4">
      <div className="hidden lg:flex items-center py-4 gap-2 w-full">
        <CiSearch className="text-light/50" size={25} />
        <input
          type="search"
          name="search-music"
          placeholder="Search"
          className="p-1 focus:outline-none bg-transparent w-full max-w-xl placeholder:text-light/40"
        />
      </div>
      <div>
        <Hero />
      </div>
    </div>
  );
}
