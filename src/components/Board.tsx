import KanbanData from "@/lib/types";
import ColumnContainer from "./ColumnContainer";

export default function Board({
  data,
  setData,
  currentBoardIndex,
}: {
  data: KanbanData[];
  setData: (data: KanbanData[]) => void;
  currentBoardIndex: number;
}) {
  return (
    <>
      <ColumnContainer
        data={data}
        setData={setData}
        currentBoardIndex={currentBoardIndex}
      />
    </>
  );
}
