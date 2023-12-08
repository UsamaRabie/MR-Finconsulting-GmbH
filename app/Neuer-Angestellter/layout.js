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
            <div className="flex gap-5 items-center justify-between px-36">
              <Link className={`  ${activeLink === "Neuer-Angestellter/Personalien" ? "border-b-4 border-solid border-[#3AB3B3] " : "" }`} href="Personalien">Personalien</Link>
              <Link className={`  ${activeLink === "Neuer-Angestellter/Beschaftigung" ? "border-b-4 border-solid border-[#3AB3B3] " : ""}`} href="Beschaftigung">Beschaftigung</Link>
              <Link className={`  ${activeLink === "Neuer-Angestellter/Lohnsteuer" ? "border-b-4 border-solid border-[#3AB3B3]" : ""}`} href="Lohnsteuer">Lohnsteuer</Link>
              <Link className={`  ${activeLink === "Neuer-Angestellter/Sozialversicherung" ? "border-b-4 border-solid border-[#3AB3B3] " : ""}`} href="Sozialversicherung">Sozialversicherung</Link>
              <Link className={`  ${activeLink === "Neuer-Angestellter/Entgelt" ? "border-b-4 border-solid border-[#3AB3B3] " : ""}`} href="Entgelt">Entgelt</Link>
              <Link className={`  ${activeLink === "Neuer-Angestellter/Weitere-Hinweise" ? "border-b-4 border-solid border-[#3AB3B3] " : ""}`} href="Weitere-Hinweise">Weitere Hinweise</Link>
              <Link className={`  ${activeLink === "Neuer-Angestellter/Anlagen-Arbeitspapiere" ? "border-b-4 border-solid border-[#3AB3B3] " : ""}`} href="Anlagen-Arbeitspapiere">Anlagen: Arbeitspapiere</Link>
              <Link className={`  ${activeLink === "Neuer-Angestellter/Freigabe" ? "border-b-4 border-solid border-[#3AB3B3] " : ""}`} href="Freigabe">Freigabe</Link>
            </div>

            {children}

            <div className="flex justify-end items-center gap-4 mr-[200px] mt-5">
              <button className="p-2 rounded-lg text-white text-sm bg-[#979797]">Personalnummer</button>
              <button className="p-2 rounded-lg text-white text-sm bg-[#3AB3B3]">Vollstandigkeitsprufung</button>
              <button className="p-2 rounded-lg text-white text-sm bg-[#3AB3B3]">Arbeitnehmer erstellen</button>
            </div>
   
          </div>
  );
}
