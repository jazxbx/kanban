import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FaEllipsisVertical } from "react-icons/fa6";

import KanbanData from "@/lib/types";

export default function HeaderDropdown() {
  return (
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
  );
}
