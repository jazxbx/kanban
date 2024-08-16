import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";

import { TbArrowsMove } from "react-icons/tb";
import { FaEllipsisVertical } from "react-icons/fa6";

export default function TaskCard({ task }) {
  return (
    <Card className="h-[110px] w-[280px] flex flex-col shadow-lg dark:bg-gray-700">
      <CardHeader className="p-1 flex flex-row justify-between items-center">
        <TbArrowsMove className="m-4" />
        <FaEllipsisVertical className="m-4" />
      </CardHeader>
      <CardContent className="text-wrap truncate font-bold text-base">
        {task.name}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
