import React from "react";
import Search from "./components/Search";
import User from "./components/User";

const page = () => {
  return (
 
      <div className="bg-white p-2  rounded-[15px] w-[80%] mx-auto border-2 border-solid border-red-500">
        <button
        className="flex w-full items-center justify-between bg-white p-3 pb-10 border-b-2 text-[#2D3748] cursor-auto "
        
      >Standort</button>
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
