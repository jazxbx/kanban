"use client";
import { useEffect, useState } from "react";
import Board from "./Board";
import Sidebar from "./Sidebar";
import { defaultInfo } from "@/lib/data";

export default function BaseLayout() {
  const [data, setData] = useState(defaultInfo);
  const [currentBoardIndex, setCurrentBoardIndex] = useState(0);
  // useEffect(() => {
  //   // sets initial state
  //   setCurrentBoardIndex(0);
  // }, []);
  return (
    <>
      <div className="subpixel-antialiased select-none flex flex-col h-screen">
        {/* Header */}
        <div className="h-[100px] w-full bg-gray-200">test header</div>

        {/* Sidebar */}
        <div className="flex">
          <Sidebar
            data={data}
            setData={setData}
            currentBoardIndex={currentBoardIndex}
            setCurrentBoardIndex={setCurrentBoardIndex}
          />

          {/* Main Content Area */}
          <Board
            data={data}
            setData={setData}
            currentBoardIndex={currentBoardIndex}
          />
        </div>
      </div>
    </>
  );
}
