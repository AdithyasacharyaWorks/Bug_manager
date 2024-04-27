import React from "react";
import Button from "../Components/Button";
function Body({ fnc }) {
  return (
    <div>
      <div>
        <div className="grid grid-cols-2 w-full gap-3">
          <div className="p-6 rounded-lg shadow-md bg-white transition duration-300 transform hover:shadow-lg hover:scale-105 ml-5">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Bug Management Made Easy
            </h2>
            <p className="text-lg text-gray-800">
              We facilitate seamless bug management, enabling effortless
              collaboration within your team. Our tool empowers you to track and
              manage bugs with ease, ensuring a smooth workflow throughout.
            </p>
          </div>
          <div className=" bg-[rgb(23,25,30)] flex justify-center items-center flex-col gap-5 rounded-lg mr-5 transition duration-300 transform hover:shadow-lg hover:scale-105">
            <Button text={"Create a new bug"} fnc={fnc} />
            <Button text={"Bugs created by you"} />
            <Button text={"All Bugs"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
