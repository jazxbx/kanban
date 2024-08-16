import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import hideIcon from "@/assets/icon-hide-sidebar.svg";
import showIcon from "@/assets/icon-show-sidebar.svg";

export default function Sidebar({
  data,
  setData,
  currentBoardIndex,
  setCurrentBoardIndex,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  function handleOnClick(i: number) {
    return setCurrentBoardIndex(i);
  }

  return (
    <>
      <Card
        className={`w-[300px] h-full bg-gray-50 dark:bg-gray-600 ${
          !sidebarOpen && "hidden"
        }`}
      >
        <CardHeader className="text-xl font-bold">
          <div className="flex flex-row justify-between items-center">
            <div>Your Boards</div>
            <Button variant="ghost" className="text-2xl pt-0">
              +
            </Button>
          </div>
        </CardHeader>
        <div className="flex flex-col h-5/6 justify-between">
          <CardContent>
            {data.map((board, i: number) => (
              <Button
                variant={currentBoardIndex === i ? "outline" : "ghost"}
                onClick={() => handleOnClick(i)}
                key={board.id}
                className="rounded-r-full"
              >
                {board.name}
              </Button>
            ))}
          </CardContent>
          <CardFooter>
            <Button
              variant="ghost"
              onClick={() => setSidebarOpen(false)}
              className="rounded-r-full"
            >
              <Image src={hideIcon} alt="hide sidebar icon" />
              <span>&nbsp;&nbsp;&nbsp;</span>
              <div>Hide Sidebar</div>
            </Button>
          </CardFooter>
        </div>
      </Card>
      <div className={`h-full relative ${sidebarOpen && "hidden"}`}>
        <Button
          onClick={() => setSidebarOpen(true)}
          className="absolute bottom-[11%] z-10 rounded-r-full h-[50px] w-[50px] dark:bg-gray-600"
        >
          <Image src={showIcon} alt="show sidebar" />
        </Button>
      </div>
    </>
  );
}
