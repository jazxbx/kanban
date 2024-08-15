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
      <div>
        {/* <Header data={data} /> */}
        {/* <Sidebar
          data={data}
          setData={setData}
          currentBoardIndex={currentBoardIndex}
          setCurrentBoardIndex={setCurrentBoardIndex}
        /> */}
      </div>
      <Board
        data={data}
        setData={setData}
        currentBoardIndex={currentBoardIndex}
      />
    </>
  );
}
