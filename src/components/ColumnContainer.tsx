import Column from "./Column";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export default function ColumnContainer({ data, setData, currentBoardIndex }) {
  return (
    <ScrollArea>
      <div className="flex flex-row gap-10 ml-10 mt-10 w-full">
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
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
