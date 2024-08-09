import { useMemo } from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import TaskCard from "./TaskCard";
import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useState } from "react";

// export function ColumnContainer({ children }: { children: React.ReactNode }) {
//   return (
//     <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
//       <div className="flex gap-4 items-center flex-row justify-center">
//         {children}
//       </div>{" "}
//       <ScrollBar orientation="horizontal" />
//     </ScrollArea>
//   );
// }

export function Column({column})) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{column}</CardTitle>
      </CardHeader>
      <ScrollArea>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </Card>
  );
}
