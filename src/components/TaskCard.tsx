import { Card, CardContent, CardDescription } from "./ui/card";

export default function TaskCard({ task }) {
  return (
    <Card>
      <CardContent>{task.name}</CardContent>
    </Card>
  );
}
