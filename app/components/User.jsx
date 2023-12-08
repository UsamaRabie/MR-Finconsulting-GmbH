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
          <svg
            width="15"
            height="10"
            viewBox="0 0 15 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 9.99998C7.32063 9.99998 7.14664 9.96181 6.97803 9.88547C6.80942 9.80914 6.66951 9.70736 6.5583 9.58013L0.369955 2.55725C0.123318 2.27735 0 1.92111 0 1.48855C0 1.05598 0.123318 0.699743 0.369955 0.419846C0.616591 0.139948 0.930493 0 1.31166 0C1.69283 0 2.00673 0.139948 2.25336 0.419846L7.5 6.37403L12.7466 0.419846C12.9933 0.139948 13.3072 0 13.6883 0C14.0695 0 14.3834 0.139948 14.63 0.419846C14.8767 0.699743 15 1.05598 15 1.48855C15 1.92111 14.8767 2.27735 14.63 2.55725L8.4417 9.58013C8.30717 9.7328 8.16143 9.8412 8.00448 9.90532C7.84753 9.96944 7.67937 10.001 7.5 9.99998Z"
              fill="#3AB3B3"
            />
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
