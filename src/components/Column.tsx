import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "./ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import TaskCard from "./TaskCard";

export default function Column({ column, data, setData }) {
  return (
    <>
      <Card className="min-w-[336px] min-h-[420px]">
        <CardHeader>
          <CardTitle className="subpixel-antialiased">{column.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="min-h-[280px] min-w-[280px]">
            <div className="flex flex-col gap-2">
              {column.tasks.map((task) => (
                <TaskCard task={task} key={task.id} />
              ))}
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </CardContent>
      </Card>
    </>
  );
}
