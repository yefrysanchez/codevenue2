import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { CiSearch } from "react-icons/ci";
import Player from "./components/Player";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
});
export const metadata: Metadata = {
  title: "CodeVenue",
  description:
    "Welcome to CodeVenue, where coding meets creativity through the soothing sounds of lofi music. Designed with developers in mind, our platform offers a curated selection of lofi beats to enhance your coding sessions and foster productivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-dark text-light`}>
        <main className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto">
          <Navbar />
          <div className="w-full px-4 lg:pl-0 lg:pr-4">
            <div className="hidden sticky top-0 left-0 lg:flex items-center py-4 gap-2 w-full bg-dark z-40">
              <CiSearch className="text-light/50" size={25} />
              <input
                type="search"
                name="search-music"
                placeholder="Search"
                className="p-1 focus:outline-none bg-transparent w-full max-w-xl placeholder:text-light/40"
              />
            </div>
            {children}
          </div>
        </main>
        <footer>
          <Player />
        </footer>
      </body>
    </html>
  );
}
