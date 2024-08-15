import Column from "./Column";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export default function ColumnContainer({ data, setData, currentBoardIndex }) {
  console.log(data[currentBoardIndex].columns);
  return (
    <ScrollArea>
      <div className="flex flex-row">
        {data[currentBoardIndex].columns.map((col) => {
          return (
            <Column
              column={col}
              data={data}
              setData={setData}
              currentBoardIndex={currentBoardIndex}
            />
          );
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
