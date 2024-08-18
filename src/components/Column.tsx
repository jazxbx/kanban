import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "./ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import TaskCard from "./TaskCard";

export default function Column({ column, data, setData }) {
  return (
    <>
      <Card className="min-w-[336px] shadow bg-gray-50 dark:bg-gray-600 min-h-[250px] max-h-[700px]">
        <CardHeader>
          <CardTitle className="text-ellipsis">{column.name}</CardTitle>
        </CardHeader>
        <CardContent className="h-[90%]">
          <ScrollArea className="flex flex-col gap-3 min-h-[110px] min-w-[280px] h-full overflow-y-auto">
            {/* <div className="flex flex-col gap-3 min-h-[110px] min-w-[280px] h-full overflow-auto"> */}
            {column.tasks.map((task) => (
              <TaskCard task={task} key={task.id} />
            ))}
            {/* </div> */}
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </CardContent>
      </Card>
    </>
  );
}
