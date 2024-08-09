import React, { useMemo, useState } from "react";
import {
  DndContext,
  closestCenter,
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

import TaskCard from "./TaskCard";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "./ui/scroll-area";

export default function KanbanBoard() {
  const [items, setItems] = useState([
    {
      id: 1,
      columnId: "done",
      content: "Project initiation and planning",
    },
    {
      id: 2,
      columnId: "done",
      content: "Gather requirements from stakeholders",
    },
    {
      id: 3,
      columnId: "done",
      content: "Create wireframes and mockups",
    },
    {
      id: 4,
      columnId: "in-progress",
      content: "Develop homepage layout",
    },
    {
      id: 5,
      columnId: "in-progress",
      content: "Design color scheme and typography",
    },
    {
      id: 6,
      columnId: "todo",
      content: "Implement user authentication",
    },
    {
      id: 7,
      columnId: "todo",
      content: "Build contact us page",
    },
    {
      id: 8,
      columnId: "todo",
      content: "Create product catalog",
    },
    {
      id: 9,
      columnId: "todo",
      content: "Develop about us page",
    },
    {
      id: 10,
      columnId: "todo",
      content: "Optimize website for mobile devices",
    },
    {
      id: 11,
      columnId: "todo",
      content: "Integrate payment gateway",
    },
    {
      id: 12,
      columnId: "todo",
      content: "Perform testing and bug fixing",
    },
    {
      id: 13,
      columnId: "todo",
      content: "Launch website and deploy to server",
    },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const itemIds = useMemo(() => items.map((item) => item.id), [items]);
  const columnIds = useMemo(
    () => [
      ...new Set(
        items.map((item) => {
          return item.columnId;
        })
      ),
    ],
    [items]
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
        <div className="flex flex-row">
          {columnIds.map((col) => {
            return (
              <Card className="w-96">
                <CardHeader>
                  <CardTitle>{col}</CardTitle>
                </CardHeader>
                <ScrollArea className="h-500">
                  {items
                    .filter((item) => {
                      return item.columnId === col;
                    })
                    .map((item) => (
                      <TaskCard id={item.id} key={item.id} />
                    ))}
                  <ScrollBar orientation="vertical" />
                </ScrollArea>
              </Card>
            );
          })}
        </div>
      </SortableContext>
    </DndContext>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) {
      return;
    }

    const activeItem = items.find((item) => item.id === active.id);
    const overItem = items.find((item) => item.id === over.id);

    if (active.id !== over.id || activeItem.columnId !== overItem.columnId) {
      setItems((items) => {
        const temp = [...items];
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        if (activeItem.columnId !== overItem.columnId) {
          temp[oldIndex].columnId = temp[newIndex].columnId;
        }
        return arrayMove(temp, oldIndex, newIndex);
      });
    }
  }
}
