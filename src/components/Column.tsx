import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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
  useSortable,
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

export function Column(props) {
  const { setNodeRef } = useDroppable({
    id: props.id,
  });
  const ids = useMemo(() => {
    const temp = [];
    props.items.forEach((column) =>
      column.tasks.forEach((task) => temp.push(task.id))
    );
    return temp;
  }, [props.tasks]);
  return (
    <Card className="h-76vh w-fit">
      <CardHeader>
        <CardTitle>{props.column.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea
          ref={setNodeRef}
          className="h-[75vh] w-[350px] rounded-md border "
        >
          <SortableContext
            id={props.id}
            items={ids}
            strategy={verticalListSortingStrategy}
          >
            <div ref={setNodeRef} className="h-[75vh]">
              {props.column.tasks.map((task) => (
                <TaskCard task={task} id={task.id} key={task.id} />
              ))}
            </div>
          </SortableContext>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
