import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["100","200", "400", "700"] });
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
        <main className="flex flex-col lg:flex-row min-h-screen w-full max-w-7xl mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
