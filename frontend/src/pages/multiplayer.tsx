import React from "react";

const Multiplayer = () => {
  return (
    <div
      style={{ backgroundImage: "url('./background.png')" }}
      className="w-screen h-screen bg-no-repeat bg-cover"
    >
      <div className="w-screen flex justify-between">
        <div className="bg-yellow-600 w-1/4 h-24"> health1</div>
        <div className="bg-red-600 w-1/4 h-24">timer</div>
        <div className="bg-gray-600 w-1/4 h-24">
          <h1>health2</h1>
        </div>
      </div>
      <div className="w-screen flex justify-between mt-12 h-1/2">
        <div className="bg-yellow-600 w-1/4 ">team red</div>
        <div className="w-2/5 flex flex-col justify-between">
          <div className="bg-green-600 w-full h-3/4">malikre</div>
          <button
            style={{ borderRadius: "50%" }}
            className="bg-green-600 m-auto w-40 h-40 mt-10"
          >
            Tap Here !
          </button>
        </div>
        <div className="bg-gray-600 w-1/4 ">
          <h1>team blue</h1>
        </div>
      </div>
      <div className="bg-yellow-600 w-3/5 h-1/4 m-auto place-self-end mt-12">
        {" "}
        health1
      </div>
    </div>
  );
};

export default Multiplayer;
