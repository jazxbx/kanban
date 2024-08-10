import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Grab from "@/assets/icon-grab.svg";

export default function CosmeticTaskCard(props) {
  return (
    <Card key={props.id}>
      <CardHeader className="bg-gray-100">
        <Image alt="grab icon " src={Grab} />
      </CardHeader>
      <CardContent>{props.task.name}</CardContent>
    </Card>
  );
}
