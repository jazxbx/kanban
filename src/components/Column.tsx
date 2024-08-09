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
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
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

export function Column({ column, tasks, setTasks }) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const ids = tasks.filter((t) => t.id);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{column}</CardTitle>
      </CardHeader>
      <ScrollArea>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={ids} strategy={verticalListSortingStrategy}>
            {tasks.map((task: any) => {
              return <TaskCard task={task} key={task.id} />;
            })}
          </SortableContext>
        </DndContext>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </Card>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setTasks((tasks) => {
        const oldIndex = tasks.findIndex((task) => task.id === active.id);
        const newIndex = tasks.findIndex((task) => task.id === over.id);
        console.log(tasks);
        return arrayMove(tasks, oldIndex, newIndex);
      });
    }
  }
}
