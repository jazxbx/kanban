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

export default function TaskCard({ id, content }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div>
      <Card ref={setNodeRef} style={style}>
        <CardHeader
          className="bg-gray-100 h-2.5 w-150"
          {...attributes}
          {...listeners}
        >
          <Image alt="grab icon " src={Grab} />
        </CardHeader>
        <CardContent>{content}</CardContent>
      </Card>
    </div>
  );
}
