import KanbanData from "@/lib/types";
import { Button } from "./ui/button";

export default function HeaderDropdownDelete({
  setIsDeleting,
  data,
  setData,
  currentBoardIndex,
  setCurrentBoardIndex,
}: {
  setIsDeleting: (data: boolean) => void;
  data: KanbanData[];
  setData: (data: KanbanData[]) => void;
  currentBoardIndex: number;
  setCurrentBoardIndex: (data: number) => void;
}) {
  function deleteBoard() {
    const dataCopy = [...data];
    dataCopy.splice(currentBoardIndex, 1);
    setData(dataCopy);
    setCurrentBoardIndex(0);
    setIsDeleting(false);
  }
  function cancelDelete() {
    setIsDeleting(false);
  }
  return (
    <div>
      <p>Are you sure you want to delete?</p>
      <div className="flex justify-evenly mt-4">
        <Button
          onClick={deleteBoard}
          type="button"
          variant="outline"
          className="font-bold"
        >
          Yes
        </Button>
        <Button
          onClick={cancelDelete}
          type="button"
          variant="outline"
          className="font-bold"
        >
          No
        </Button>
      </div>
    </div>
    // test
  );
}
