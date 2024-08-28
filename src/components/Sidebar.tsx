import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import hideIcon from "@/assets/icon-hide-sidebar.svg";
import showIcon from "@/assets/icon-show-sidebar.svg";
import AddBoard from "./AddBoard";
import KanbanData from "@/lib/types";

export default function Sidebar({
  data,
  setData,
  currentBoardIndex,
  setCurrentBoardIndex,
}: {
  data: KanbanData[];
  setData: (data: KanbanData[]) => void;
  currentBoardIndex: number;
  setCurrentBoardIndex: (index: number) => void;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [addingBoard, setAddingBoard] = useState(false);

  function handleOnClick(i: number) {
    return setCurrentBoardIndex(i);
  }

  function toggleSidebar() {
    return setSidebarOpen((prev) => !prev);
  }

  return (
    <div className="relative flex flex-col items-start bg-white dark:bg-gray-600">
      {sidebarOpen ? (
        <div className="w-[300px] bg-white dark:bg-gray-600">
          <div className="flex justify-between items-center m-4">
            <h1 className="text-lg font-semibold">Your Boards</h1>
            <Button
              onClick={() => setAddingBoard(true)}
              variant="ghost"
              className="text-2xl pt-0"
            >
              +
            </Button>
          </div>

          <div className="pr-6">
            {data.map((board: KanbanData[][0], i: number) => (
              <div
                onClick={() => handleOnClick(i)}
                key={board.id}
                className={`rounded-r-full block p-5 ${
                  currentBoardIndex === i
                    ? "bg-indigo-800 dark:bg-gray-900 text-white"
                    : ""
                }`}
              >
                {board.name}
              </div>
            ))}
            {addingBoard && (
              <div className="ml-5">
                <AddBoard
                  data={data}
                  setData={setData}
                  setAddingBoard={setAddingBoard}
                />
              </div>
            )}
          </div>
          <div className="absolute bottom-[18%]">
            <Button
              variant="ghost"
              onClick={toggleSidebar}
              className="rounded-r-full"
            >
              <Image src={hideIcon} alt="hide sidebar icon" />
              <span>&nbsp;&nbsp;&nbsp;</span>
              <div>Hide Sidebar</div>
            </Button>
          </div>
        </div>
      ) : (
        <div className="h-full w-0">
          <Button
            onClick={toggleSidebar}
            className="absolute z-50 bottom-[18%] rounded-r-full h-[50px] w-[50px] bg-indigo-800 hover:bg-indigo-700 dark:bg-gray-700"
          >
            <Image src={showIcon} alt="show sidebar" />
          </Button>
        </div>
      )}
    </div>
  );
}
