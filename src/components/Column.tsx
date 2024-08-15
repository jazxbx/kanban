import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "./ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import TaskCard from "./TaskCard";

export default function Column({ column, data, setData }) {
  return (
    <>
      <Card className="min-w-[280px] min-h-[420px]">
        <CardHeader>
          <CardTitle>{column.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="min-h-[280px]">
            {column.tasks.map((task) => (
              <TaskCard task={task} />
            ))}
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </CardContent>
      </Card>
    </>
  );
}
