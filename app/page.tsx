"use client";
import { useState } from "react";
import { items } from "./constants/items";


export default function Home() {
  const [active, setActive] = useState<string>("fibonacci");

  const ActiveComponent = items[active].component;

  return (
    <div className="h-screen w-full  flex ">
      <div className="bg-neutral-950 h-full w-[300px] flex flex-col overflow-auto custom-scrollbar">
        {Object.entries(items).map(([key, value], i) => (
          <button
            className="hover:bg-neutral-800 p-2 w-full"
            key={i}
            onClick={() => setActive(key)}
          >
            {value.title}
          </button>
        ))}
      </div>
      <div className="w-full h-full bg-neutral-800 p-5">
        <ActiveComponent />
      </div>
    </div>
  );
}
