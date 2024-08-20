import { Button } from "./ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export default function TaskCardEdit({
  task,
  data,
  setData,
  column,
  currentBoardIndex,
  setIsEditing,
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
    const newName = values.taskName;
    const tempTask = { ...task };
    tempTask.name = newName;
    // prepare a copy of 'data' for mutation
    const tempData = [...data];
    // find the indices of the task and the column
    const columnId = column.id;
    const columnIndex = data[currentBoardIndex].columns.findIndex(
      (col) => col.id === columnId
    );
    const taskId = task.id;
    const taskIndex = data[currentBoardIndex].columns[
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
