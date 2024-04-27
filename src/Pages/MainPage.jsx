import React from "react";
import Header from "./Header";
import BreadCrumbs from "./BreadCrumbs";
import Body from "./Body";
import { useState } from "react";
import CreateBug from "./CreateBug";

function MainPage() {
  const [openCreateNewBug, setOpenCreateNewBug] = useState(false);
  const handleCreateBugClick = () => {
    setOpenCreateNewBug(true);
  };
  return (
    <div className="grid grid-rows-[88px,600px]">
      <div>
        <Header />
        <BreadCrumbs />
      </div>

      {!openCreateNewBug && (
        <div className="flex justify-center items-center ">
          <Body fnc={setOpenCreateNewBug} />
        </div>
      )}
      {openCreateNewBug && (
        <div className="p-5 mt-2">
          <CreateBug />
        </div>
      )}
    </div>
  );
}

export default MainPage;
