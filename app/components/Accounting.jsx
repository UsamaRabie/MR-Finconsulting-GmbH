import React from "react";
import AccountingButton from "./AccountingButton";
import CardAccounting from "./CardAccounting";
import ContactAccounting from "./ContactAccounting";
import Stars from "./Stars";
import News from "./News";

const Accounting = () => {
  return (
    <div className="flex gap-3 w-[95%] mx-auto">
      <div className="w-2/3 flex flex-col">
        <div className="bg-white p-5 shadow-lg">
          <h1 className="text-[#265E73] mb-2">Mein Buchhaltungsbüro</h1>
          <AccountingButton />
          <CardAccounting />
        </div>

        <div className="flex-grow">
          <ContactAccounting />
        </div>
      </div>

      <div className="w-1/3 flex flex-col">
        <div className="mb-5">
          <Stars />
        </div>

        <div className="flex-grow">
          <News />
        </div>
      </div>
    </div>
  );
};

export default Accounting;
