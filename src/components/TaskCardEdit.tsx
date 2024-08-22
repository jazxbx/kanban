import { Button } from "./ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import KanbanData from "@/lib/types";

export default function TaskCardEdit({
  task,
  data,
  setData,
  column,
  currentBoardIndex,
  setIsEditing,
}: {
  task: KanbanData["columns"][0]["tasks"][0];
  data: KanbanData[];
  setData: (data: KanbanData[]) => void;
  column: KanbanData["columns"][0];
  currentBoardIndex: number;
  setIsEditing: (value: boolean) => void;
}) {
  const formSchema = z.object({
    taskName: z
      .string()
      .min(1, {
        message: "Task can't be blank",
      })
      .max(40, { message: "Please shorten the task name" }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { taskName: task.name },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // prepare the task object with a new name for insertion into the array
    const newName: string = values.taskName;
    const tempTask: KanbanData["columns"][0]["tasks"][0] = { ...task };
    tempTask.name = newName;
    // prepare a copy of 'data' for mutation
    const tempData: KanbanData[] = [...data];
    // find the indices of the task and the column
    const columnId: string = column.id;
    const columnIndex: number = data[currentBoardIndex].columns.findIndex(
      (col) => col.id === columnId
    );
    const taskId: string = task.id;
    const taskIndex: number = data[currentBoardIndex].columns[
      columnIndex
    ].tasks.findIndex((task) => taskId === task.id);
    // mutate the tempData array using those indices then use setData()
    tempData[currentBoardIndex].columns[columnIndex].tasks.splice(
      taskIndex,
      1,
      tempTask
    );
    setData(tempData);
    // close the modal
    setIsEditing(false);
  }
  function handleCancel() {
    setIsEditing(false);
  }
  return (
    <Form {...form}>
      <form className="mt-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="taskName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-2">
          <Button type="submit" variant="outline" className="font-bold">
            Edit
          </Button>
          <Button
            onClick={handleCancel}
            type="button"
            variant="outline"
            className="font-bold ml-1"
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
