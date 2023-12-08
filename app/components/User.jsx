"use client";
import Image from "next/image";
import React from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import HoverMenu from "./HoverMenu";
function User({ img, name, email }) {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (

    <div className="  w-full p-3 mx-auto bg-white border-b-2">
      
      <button
        className="flex w-full items-center justify-between bg-white py-3 "
        onClick={toggleOpen}
      >
        <div className="flex flex-row w-full  border-solid py-3  border-gray-500">
          <Image
            width={50}
            height={200}
            class="inline-block rounded-xl ring-2 ring-white mr-3 "
            src={img}
            alt=""
          />
          <div className="flex flex-col items-start pt-2">
            <p className="text-[#2D3748] font-bold">{name}</p>
            <p className="text-[#718096]">{email}</p>
          </div>
        </div>

        <div className="">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.25 26.25C5.5625 26.25 4.97375 26.005 4.48375 25.515C3.99375 25.025 3.74917 24.4367 3.75 23.75V8.12501C3.75 7.81251 3.80209 7.53126 3.90625 7.28126C4.01042 7.03126 4.14584 6.79168 4.3125 6.56251L6.0625 4.43751C6.22917 4.20834 6.4375 4.03626 6.6875 3.92126C6.9375 3.80626 7.20834 3.74918 7.5 3.75001H22.5C22.7917 3.75001 23.0625 3.80709 23.3125 3.92126C23.5625 4.03543 23.7708 4.20751 23.9375 4.43751L25.6875 6.56251C25.8542 6.79168 25.9896 7.03126 26.0938 7.28126C26.1979 7.53126 26.25 7.81251 26.25 8.12501V23.75C26.25 24.4375 26.005 25.0263 25.515 25.5163C25.025 26.0063 24.4367 26.2508 23.75 26.25H6.25ZM6.75 7.50001H23.25L22.1875 6.25001H7.8125L6.75 7.50001ZM15 22.5L20 17.5L18.25 15.75L16.25 17.75V12.5H13.75V17.75L11.75 15.75L10 17.5L15 22.5Z" fill="#265E73"/>
</svg>

        </div>
      </button>

      <Collapse open={open}>
        <Card className="my-4 mx-auto  bg-[#3AB3B3] p-5">
          <CardBody className="flex bg-white h-6 items-center justify-center rounded-full">
            <HoverMenu
              title={"Kommunikation"}
              menuItems={[
                "→ Nachrichtenschreiben",
                "→ Anrufen",
                "→ Videokonferenz",
                "→ Fax senden",
                "→ Fax (FA)",
                "→ Nachrichten an FA",
                "→ Termin zum Beratungsgespräch",
              ]}
            />

            <HoverMenu
              title={"Dokumente"}
              menuItems={[
                "→ Dokumentenschreiben",
                "→ Rechnungen",
                "→ Beleg hochladen",
                "→ Dokumenten des Mandanten bereitstellen",
                "→ Dokumente bearbeiten",
                "→ Auswertungen",
              ]}
            />

            <HoverMenu
              title={"Verlauf (Kunden Historie)"}
              menuItems={["→ Nachrichten Verlauf", "→ Unterlagen Verlauf"]}
            />

            <HoverMenu
              title={"Kundendaten"}
              menuItems={["→ Kundendaten ändern", "→ Kundendaten einfügen"]}
            />
          </CardBody>
        </Card>
      </Collapse>
    </div>

  );
}

export default User;
