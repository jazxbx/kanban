import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FaEllipsisVertical } from "react-icons/fa6";

import KanbanData from "@/lib/types";
import { useState } from "react";
import Modal from "./Modal";
import HeaderDropdownDelete from "./HeaderDropdownDelete";
import HeaderDropdownEdit from "./HeaderDropdownEdit";

export default function HeaderDropdownr({
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
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <FaEllipsisVertical className="pt-2" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit Board</DropdownMenuItem>
          <DropdownMenuItem className="text-red-500 focus:text-red-500">
            Delete board
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {isEditing && (
        <Modal open={isEditing} setOpen={setIsEditing}>
          <HeaderDropdownEdit data={data} setData={setData} />
        </Modal>
      )}
      {isDeleting && (
        <Modal open={isDeleting} setOpen={setIsDeleting}>
          <HeaderDropdownDelete
            data={data}
            setData={setData}
            currentBoardIndex={currentBoardIndex}
            setCurrentBoardIndex={setCurrentBoardIndex}
          />
        </Modal>
      )}
    </>
  );
}
