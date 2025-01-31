import React from "react";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="w-full bg-[url(../assets/bg.jpg)] bg-cover bg-no-repeat">
      <main className="w-full text-white bg-black/40">
        <Outlet />
      </main>
    </div>
  );
};

export default Body;
