import { useState } from "react";
import { Column } from "./Column";

export default function KanbanBoard() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      columnId: "done",
      content: "Project initiation and planning",
    },
    {
      id: "2",
      columnId: "done",
      content: "Gather requirements from stakeholders",
    },
    {
      id: "3",
      columnId: "done",
      content: "Create wireframes and mockups",
    },
    {
      id: "4",
      columnId: "in-progress",
      content: "Develop homepage layout",
    },
    {
      id: "5",
      columnId: "in-progress",
      content: "Design color scheme and typography",
    },
    {
      id: "6",
      columnId: "todo",
      content: "Implement user authentication",
    },
    {
      id: "7",
      columnId: "todo",
      content: "Build contact us page",
    },
    {
      id: "8",
      columnId: "todo",
      content: "Create product catalog",
    },
    {
      id: "9",
      columnId: "todo",
      content: "Develop about us page",
    },
    {
      id: "10",
      columnId: "todo",
      content: "Optimize website for mobile devices",
    },
    {
      id: "11",
      columnId: "todo",
      content: "Integrate payment gateway",
    },
    {
      id: "12",
      columnId: "todo",
      content: "Perform testing and bug fixing",
    },
    {
      id: "13",
      columnId: "todo",
      content: "Launch website and deploy to server",
    },
  ]);

  const [columns, setColumns] = useState(["todo", "in-progress", "done"]);

  return (
    <div className="flex flex-row">
      {columns.reverse().map((c) => {
        return (
          <Column
            column={c}
            tasks={tasks.filter((t) => t.columnId === c)}
            setTasks={setTasks}
          />
        );
      })}
    </div>
  );
}
