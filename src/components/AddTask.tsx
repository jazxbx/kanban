import { Button } from "./ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";

export default function AddTask({ column, data, setData, setAddingTask }) {
  const formSchema = z.object({
    task: z
      .string()
      .min(1, {
        message: "Task can't be blank",
      })
      .max(20, { message: "Please shorten the task name" }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  function handleSubmit(event: Event) {
    event.preventDefault();

    setAddingTask(false);
  }
  function handleCancel() {
    setAddingTask(false);
  }
  return (
    <Form {...form}>
      <form className="mt-4" onSubmit={handleSubmit}>
        <FormField
          control={form.control}
          name="task"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormDescription>This is your task name</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-2">
          <Button type="submit" variant="outline" className="font-bold">
            Add
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
