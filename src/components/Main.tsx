import { useState } from "react";
import Board from "./Board";
import Sidebar from "./Sidebar";
import defaultInfo from "@/lib/data";

const [data, setData] = useState(defaultInfo);
const [currentBoardIndex, setCurrentBoardIndex] = useState(undefined);

export default function Main() {
  return (
    <>
      <div>
        {/* <Header data={data} /> */}
        <Sidebar
          data={data}
          currentBoardIndex={currentBoardIndex}
          setCurrentBoardIndex={setCurrentBoardIndex}
        />
      </div>
      <Board data={data} currentBoardIndex={currentBoardIndex} />
    </>
  );
}
