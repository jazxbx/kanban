import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";

export default function TaskCard({ task }) {
  return (
    <Card className="h-[88px] w-[280px] flex flex-col">
      <CardHeader></CardHeader>
      <CardContent className="text-wrap truncate subpixel-antialiased font-bold text-base">
        {task.name}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
