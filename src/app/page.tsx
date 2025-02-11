
import Genres from "./components/Genres";
import Hero from "./components/Hero";
import RecentlyPlayed from "./components/RecentlyPlayed";

export default function Home() {
  return (
    <div className="w-full p-4">
      
      <div className="flex flex-col gap-8 lg:flex-row">
        <Hero />
        <RecentlyPlayed />
      </div>

      <Genres />
    </div>
  );
}

