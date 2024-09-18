"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { defaultInfo } from "@/lib/data";
import Header from "@/components/Header";
import ColumnContainer from "./ColumnContainer";
import EmptyState from "./EmptyState";

export default function BaseLayout() {
  const [data, setData] = useState(defaultInfo);
  const [currentBoardIndex, setCurrentBoardIndex] = useState(0);
  return (
    <div className="subpixel-antialiased select-none flex flex-col bg-slate-100 dark:bg-gray-900 overflow-hidden min-h-full">
      <Header
        boardName={data[currentBoardIndex]?.name}
        data={data}
        setData={setData}
        currentBoardIndex={currentBoardIndex}
        setCurrentBoardIndex={setCurrentBoardIndex}
      />
      <div className="flex-1 flex">
        <Sidebar
          data={data}
          setData={setData}
          currentBoardIndex={currentBoardIndex}
          setCurrentBoardIndex={setCurrentBoardIndex}
        />
        <div className="flex-1 overflow-hidden">
          {data.length > 0 ? (
            <ColumnContainer
              data={data}
              setData={setData}
              currentBoardIndex={currentBoardIndex}
            />
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
}
