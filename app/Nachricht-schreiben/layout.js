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
            <div className="flex gap-5 items-center justify-between text-center w-[80%] mx-auto mb-5 bg-[#F8F9FA]">
              <Link className={`${activeLink === "Nachricht-schreiben/FINANZBUCHHALTUNG" ? " bg-white text-[#3AB3B3] " : "" }  w-full p-3 font-bold`} href="FINANZBUCHHALTUNG">FINANZBUCHHALTUNG</Link>
              <Link className={`${activeLink === "Nachricht-schreiben/JAHRESABSCHLUSS" ? " bg-white text-[#3AB3B3]" : ""} w-full p-3 font-bold`} href="JAHRESABSCHLUSS">JAHRESABSCHLUSS</Link>
              <Link className={`${activeLink === "Nachricht-schreiben/STEUERERKLARUNG" ? " bg-white text-[#3AB3B3] " : ""} w-full p-3 font-bold`} href="STEUERERKLARUNG">STEUERERKLARUNG</Link>
              <Link className={`${activeLink === "Nachricht-schreiben/ALLGEMEINES" ? " bg-white text-[#3AB3B3] " : ""} w-full p-3 font-bold`} href="ALLGEMEINES">ALLGEMEINES</Link>
              
            </div>

            {children}

          
          </div>
  );
}
