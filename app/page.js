import React from "react";
import Search from "./components/Search";
import User from "./components/User";

const page = () => {
  return (
 
      <div className="bg-white p-5 rounded-[15px] w-[85%] mx-auto border-2 border-solid">

        <div className="flex justify-between border-b-2 pb-5">

        <select className="bg-white border-2 border-gray-900 rounded-full px-6 py-1">
  <option selected>Kunden</option>
  <option value="US">test</option>

</select>

          <div className="space-x-8">

          <button className="bg-[#4FD1C5] text-white rounded-full px-6 py-3">
          Neuer Angestellter
          </button>

          <button className="bg-white border-2 border-gray-900 rounded-full px-6 py-3">
          Übertragen an
          </button>

          </div>

         

          

        </div>

        <User
          img={
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
          name={"usama"}
          email={"usamarabie21@gmail.com"}
        />
        <User
          img={
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
          name={"usama"}
          email={"usamarabie21@gmail.com"}
        />
        <User
          img={
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
          name={"usama"}
          email={"usamarabie21@gmail.com"}
        />

<User
          img={
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
          name={"usama"}
          email={"usamarabie21@gmail.com"}
        />
      </div>
 
  );
};

export default page;
