import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "./ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import TaskCard from "./TaskCard";
import { Button } from "./ui/button";
import { useState } from "react";
import AddTask from "./AddTask";

export default function Column({ column, data, setData }) {
  const [addingTask, setAddingTask] = useState(false);
  return (
    <>
      <Card className="min-w-[336px] h-fit shadow bg-gray-50 dark:bg-gray-600">
        <CardHeader>
          <CardTitle className="text-ellipsis">{column.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="min-h-[110px] min-w-[280px]">
            <div className="flex flex-col gap-3">
              {column.tasks.map((task) => (
                <TaskCard task={task} key={task.id} />
              ))}
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
          {addingTask ? (
            <AddTask
              column={column}
              data={data}
              setData={setData}
              setAddingTask={setAddingTask}
            />
          ) : (
            <Button
              onClick={() => setAddingTask(true)}
              className="font-bold mt-3"
              variant="ghost"
            >
              Add Task +
            </Button>
          )}
        </CardContent>
      </Card>
    </>
  );
}
