import { Button } from "./ui/button";
import { z } from "zod";

export default function AddTask({ column, data, setData, setAddingTask }) {
  const formSchema = z.object({
    string: z
      .string()
      .min(1, {
        message: "Task can't be blank",
      })
      .max(20, { message: "Please shorten the task name" }),
  });
  function handleSubmit() {}
  function handleCancel() {
    setAddingTask(false);
  }
  return (
    <Button variant="outline" onClick={handleCancel}>
      Cancel
    </Button>
  );
}
