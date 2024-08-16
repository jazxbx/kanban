"use client";
import { useEffect, useState } from "react";
import Board from "./Board";
import Sidebar from "./Sidebar";
import { defaultInfo } from "@/lib/data";

export default function Main() {
  const [data, setData] = useState(defaultInfo);
  const [currentBoardIndex, setCurrentBoardIndex] = useState(0);
  // useEffect(() => {
  //   // sets initial state
  //   setCurrentBoardIndex(0);
  // }, []);
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <div className="h-[100px] w-full bg-gray-200">test header</div>

        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar
            data={data}
            setData={setData}
            currentBoardIndex={currentBoardIndex}
            setCurrentBoardIndex={setCurrentBoardIndex}
          />

          {/* Main Content Area */}
          <div className="flex-1">
            <Board
              data={data}
              setData={setData}
              currentBoardIndex={currentBoardIndex}
            />
          </div>
        </div>
      </div>
    </>
  );
}
