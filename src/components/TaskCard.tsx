import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import Grab from "@/assets/icon-grab.svg";
import Image from "next/image";

export default function TaskCard({ task }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card>
        <CardHeader className="bg-gray-100 h-2.5 w-150">
          <Image alt="grab icon " src={Grab} />
        </CardHeader>
        <CardContent>{task.content}</CardContent>
      </Card>
    </div>
  );
}
