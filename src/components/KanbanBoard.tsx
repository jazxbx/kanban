import React, { useMemo, useState } from "react";

import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";

import {
  DndContext,
  closestCenter,
  LayoutMeasuringStrategy,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  closestCorners,
  MeasuringStrategy,
} from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Column } from "./Column";
import CosmeticTaskCard from "./CosmeticTaskCard";

export default function KanbanBoard() {
  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState([
    {
      name: "todo",
      id: "360d11ac",
      tasks: [
        {
          name: "ImplementLoginFeature",
          id: "8e31fc82",
        },
        {
          name: "SetupDatabaseSchema",
          id: "9e28a0e5",
        },
        {
          name: "CreateUserInterfaceMockups",
          id: "6b68b752",
        },
        {
          name: "ConfigureCI/CDPipeline",
          id: "68854bd1",
        },
        {
          name: "WriteUnitTestsForAPI",
          id: "5651d51d",
        },
      ],
    },
    {
      name: "doing",
      id: "4ec5e4f5",
      tasks: [
        {
          name: "RefactorAuthenticationModule",
          id: "daffddfb",
        },
        {
          name: "OptimizeSQLQueries",
          id: "eaca1174",
        },
        {
          name: "IntegrateOAuth2.0",
          id: "832a9dc9",
        },
        {
          name: "DevelopRESTfulEndpoints",
          id: "86fd8938",
        },
        {
          name: "ImplementErrorHandling",
          id: "2af1e579",
        },
      ],
    },
    {
      name: "review",
      id: "39c647f0",
      tasks: [
        {
          name: "CodeReviewFeatureX",
          id: "d6f8a1e9",
        },
        {
          name: "TestAPIEndpoints",
          id: "3d866750",
        },
        {
          name: "ReviewDatabaseMigrations",
          id: "233eb965",
        },
        {
          name: "CheckCrossBrowserCompatibility",
          id: "c5b49a44",
        },
        {
          name: "AnalyzePerformanceMetrics",
          id: "6f6ef78c",
        },
      ],
    },
    {
      name: "done",
      id: "13a35ce3",
      tasks: [
        {
          name: "DeployToStagingEnvironment",
          id: "4b040a5e",
        },
        {
          name: "FixCriticalBugInProduction",
          id: "3cbdbddd",
        },
        {
          name: "CompleteCodeRefactoring",
          id: "60d18e1b",
        },
        {
          name: "DocumentAPIEndpoints",
          id: "6bcaf70b",
        },
        {
          name: "MergePullRequest",
          id: "a6a4d9ee",
        },
      ],
    },
    {
      name: "backlog",
      id: "7847dad3",
      tasks: [
        {
          name: "ResearchNewFramework",
          id: "bbef7c0f",
        },
        {
          name: "PlanFeatureYDevelopment",
          id: "b8571f19",
        },
        {
          name: "SetUpLoadTesting",
          id: "b3b05a15",
        },
        {
          name: "DesignDatabaseScalingStrategy",
          id: "b1a949fb",
        },
        {
          name: "InvestigateMemoryLeak",
          id: "41e60090",
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
      // logic for empty column where insertion is via push()
      if (over.data.current === undefined) {
        const removed = temp[currentColumnIndex].tasks.splice(
          currentItemIndex,
          1
        );
        temp[targetColumnIndex].tasks.push(...removed);
        setItems(temp);
      } else {
        // splice out from one column and add to another
        const targetItemIndex = temp[targetColumnIndex].tasks.findIndex(
          (task) => task.id === over.id
        );
        const removed = temp[currentColumnIndex].tasks.splice(
          currentItemIndex,
          1
        );
        temp[targetColumnIndex].tasks.splice(targetItemIndex, 0, removed[0]);

        setItems(temp);
      }
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
      setItems(temp);
    }
    setActiveId(null);
  }

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function findTask(activeId) {
    for (let column of items) {
      for (let task of column.tasks) {
        if (task.id === activeId) {
          return task;
        }
      }
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
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCenter}
        // modifiers={[restrictToWindowEdges]}
        // layoutMeasuring={{ strategy: MeasuringStrategy.BeforeDragging }}
        // autoScroll={{ layoutShiftCompensation: false }}
      >
        {items.map((item) => (
          <Column id={item.id} key={item.id} column={item} items={items} />
        ))}
        <DragOverlay>
          {activeId !== null ? (
            <CosmeticTaskCard id={activeId} task={findTask(activeId)} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
