"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const path = usePathname();
  let activeLink=path.slice(1)
  console.log(activeLink)
  
  return (
          <div className="">
            <div className="flex gap-5 items-center justify-between w-[80%] mx-auto mb-5">
              <Link className={`  ${activeLink === "Neukunde/Allgemeine-Angaben" ? "border-b-4 border-solid border-[#3AB3B3] " : "" }`} href="Allgemeine-Angaben">Allgemeine-Angaben</Link>
              <Link className={`  ${activeLink === "Neukunde/Personliche-Angaben" ? "border-b-4 border-solid border-[#3AB3B3] " : ""}`} href="Personliche-Angaben">Personliche-Angaben</Link>
              <Link className={`  ${activeLink === "Neukunde/Bankverbindung" ? "border-b-4 border-solid border-[#3AB3B3] " : ""}`} href="Bankverbindung">Bankverbindung</Link>
              <Link className={`  ${activeLink === "Neukunde/Finanzamt" ? "border-b-4 border-solid border-[#3AB3B3]" : ""}`} href="Finanzamt">Finanzamt</Link>
            </div>

            {children}

            <div className="flex w-[90%] justify-end items-center gap-5  mt-5 mb-20">
              <button className="p-2 rounded-lg text-white text-sm bg-[#979797]">Personalnummer</button>
              <button className="p-2 rounded-lg text-white text-sm bg-[#3AB3B3]">Vollstandigkeitsprufung</button>
              <button className="p-2 rounded-lg text-white text-sm bg-[#3AB3B3]">Arbeitnehmer erstellen</button>
            </div>
   
          </div>
  );
}
