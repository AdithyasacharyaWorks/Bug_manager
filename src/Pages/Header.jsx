import React from "react";

function Header() {
  return (
    <div className="bg-[rgb(23,25,30)] text-white flex justify-between py-5 px-2">
      <div>Bug Manager</div>
      <div className="flex flex-row gap-5">
        <div>
          <button className="bg-[rgb(255,153,0)] rounded-lg text-black px-3">
            Create Bug
          </button>
        </div>
        <div>user</div>
      </div>
    </div>
  );
}

export default Header;
