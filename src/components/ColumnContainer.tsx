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
    <ScrollArea className="flex-1 overflow-x-auto">
      <div className="flex flex-row gap-10 pt-10 pl-5 w-full min-h-screen overflow-scroll">
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
      <ScrollBar orientation="horizontal" className="w-full" />
    </ScrollArea>
  );
}
