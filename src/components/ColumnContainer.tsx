import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
import Column from "./Column";
import KanbanData from "@/lib/types";

export default function ColumnContainer({
  data,
  setData,
  currentBoardIndex,
}: {
  data: KanbanData[];
  setData: (data: KanbanData[]) => void;
  currentBoardIndex: number;
}) {
  return (
    <div className="flex flex-row gap-10 pt-10 pl-5 pr-5 w-full h-screen overflow-x-auto">
      {data[currentBoardIndex].columns.map((col) => {
        return (
          <Column
            column={col}
            data={data}
            setData={setData}
            currentBoardIndex={currentBoardIndex}
            key={col.id}
          />
        );
      })}
    </div>
  );
}
