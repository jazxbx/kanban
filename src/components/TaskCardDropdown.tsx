import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import Modal from "./Modal";
import TaskCardEdit from "./TaskCardEdit";
import KanbanData from "@/lib/types";

export default function TaskCardDropdown({
  task,
  data,
  setData,
  column,
  currentBoardIndex,
}: {
  task: KanbanData["columns"][0]["tasks"][0];
  data: KanbanData[];
  setData: (data: KanbanData[]) => void;
  column: KanbanData["columns"][0];
  currentBoardIndex: number;
}) {
  const [isViewing, setIsViewing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function handleDeleteTask() {
    // prepare a copy of 'data' for mutation
    const tempData = [...data];
    // find the indices of the task and the column
    const columnId = column.id;
    const columnIndex = data[currentBoardIndex].columns.findIndex(
      (col) => col.id === columnId
    );
    const taskId = task.id;
    const taskIndex = data[currentBoardIndex].columns[
      columnIndex
    ].tasks.findIndex((task) => taskId === task.id);
    // mutate the tempData array using those indices then use setData()
    tempData[currentBoardIndex].columns[columnIndex].tasks.splice(taskIndex, 1);
    setData(tempData);
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <FaEllipsisVertical className="m-3 mt-2" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setIsViewing(true)}>
            <span>View</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsEditing(true)}>
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleDeleteTask}
            className="text-red-500 focus:text-red-500"
          >
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {isViewing && (
        <Modal open={isViewing} setOpen={setIsViewing}>
          <div className="font-bold">{task.name}</div>
        </Modal>
      )}
      {isEditing && (
        <Modal open={isEditing} setOpen={setIsEditing}>
          <TaskCardEdit
            task={task}
            data={data}
            setData={setData}
            column={column}
            currentBoardIndex={currentBoardIndex}
            setIsEditing={setIsEditing}
          />
        </Modal>
      )}
    </>
  );
}
