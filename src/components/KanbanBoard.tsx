import React, { useMemo, useState } from "react";

import TaskCard from "./TaskCard";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "./ui/scroll-area";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  closestCorners,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Column } from "./Column";
import { Tiro_Devanagari_Sanskrit } from "next/font/google";

export default function KanbanBoard() {
  const [items, setItems] = useState([
    {
      name: "todo",
      id: 100,
      tasks: [
        {
          name: "ImplementLoginFeature",
          id: 1,
        },
        {
          name: "SetupDatabaseSchema",
          id: 2,
        },
        {
          name: "CreateUserInterfaceMockups",
          id: 5,
        },
        {
          name: "ConfigureCI/CDPipeline",
          id: 6,
        },
        {
          name: "WriteUnitTestsForAPI",
          id: 7,
        },
      ],
    },
    {
      name: "doing",
      id: 200,
      tasks: [
        {
          name: "RefactorAuthenticationModule",
          id: 3,
        },
        {
          name: "OptimizeSQLQueries",
          id: 4,
        },
        {
          name: "IntegrateOAuth2.0",
          id: 8,
        },
        {
          name: "DevelopRESTfulEndpoints",
          id: 9,
        },
        {
          name: "ImplementErrorHandling",
          id: 10,
        },
      ],
    },
    {
      name: "review",
      id: 300,
      tasks: [
        {
          name: "CodeReviewFeatureX",
          id: 11,
        },
        {
          name: "TestAPIEndpoints",
          id: 12,
        },
        {
          name: "ReviewDatabaseMigrations",
          id: 13,
        },
        {
          name: "CheckCrossBrowserCompatibility",
          id: 14,
        },
        {
          name: "AnalyzePerformanceMetrics",
          id: 15,
        },
      ],
    },
    {
      name: "done",
      id: 400,
      tasks: [
        {
          name: "DeployToStagingEnvironment",
          id: 16,
        },
        {
          name: "FixCriticalBugInProduction",
          id: 17,
        },
        {
          name: "CompleteCodeRefactoring",
          id: 18,
        },
        {
          name: "DocumentAPIEndpoints",
          id: 19,
        },
        {
          name: "MergePullRequest",
          id: 20,
        },
      ],
    },
    {
      name: "backlog",
      id: 500,
      tasks: [
        {
          name: "ResearchNewFramework",
          id: 21,
        },
        {
          name: "PlanFeatureYDevelopment",
          id: 22,
        },
        {
          name: "SetUpLoadTesting",
          id: 23,
        },
        {
          name: "DesignDatabaseScalingStrategy",
          id: 24,
        },
        {
          name: "InvestigateMemoryLeak",
          id: 25,
        },
      ],
    },
  ]);

  function getColumnIds(items) {
    const output = [];
    for (let item of items) {
      output.push(item.id);
    }
    return output;
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    let currentColumn = active.id;
    let targetColumn = over.id;
    const overData = over;
    console.log(overData);

    for (let column of items) {
      for (let task of column.tasks) {
        if (task.id === over.id) {
          targetColumn = column.id;
        }
        if (task.id === active.id) {
          currentColumn = column.id;
        }
      }
    }

    if (targetColumn === undefined) {
      for (let id of getColumnIds(items)) {
        if (id === over.id) {
          currentColumn = over.id;
        }
      }
    }

    if (currentColumn !== targetColumn) {
      // seperate array to avoid mutating state
      const temp = [...items];
      const currentColumnIndex = temp.findIndex(
        (column) => column.id === currentColumn
      );
      const targetColumnIndex = temp.findIndex(
        (column) => column.id === targetColumn
      );
      const currentItemIndex = temp[currentColumnIndex].tasks.findIndex(
        (task) => task.id === active.id
      );
      if (over.data.current === undefined) {
        console.log(targetColumnIndex);
        const removed = temp[currentColumnIndex].tasks.splice(
          currentItemIndex,
          1
        );
        temp[targetColumnIndex].tasks.push(...removed);
        return setItems(temp);
      }
      const targetItemIndex = temp[targetColumnIndex].tasks.findIndex(
        (task) => task.id === over.id
      );
      // logic for empty column where insertion is via push()
      // splice out from one column and add to another
      const removed = temp[currentColumnIndex].tasks.splice(
        currentItemIndex,
        1
      );
      temp[targetColumnIndex].tasks.splice(targetItemIndex, 0, removed[0]);

      return setItems(temp);
    } else if (active.id !== over.id) {
      const temp = [...items];
      const currentColumnIndex = temp.findIndex(
        (column) => column.id === currentColumn
      );
      const targetItemIndex = temp[currentColumnIndex].tasks.findIndex(
        (task) => task.id === over.id
      );
      const currentItemIndex = temp[currentColumnIndex].tasks.findIndex(
        (task) => task.id === active.id
      );
      temp[currentColumnIndex].tasks = arrayMove(
        temp[currentColumnIndex].tasks,
        currentItemIndex,
        targetItemIndex
      );
      return setItems(temp);
    }
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="flex flex-row">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        {items.map((item) => (
          <Column id={item.id} key={item.id} column={item} items={items} />
        ))}
      </DndContext>
    </div>
  );
}
