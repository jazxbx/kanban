import { Button } from './ui/button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from './ui/input';
import { createId } from '@/lib/createId';
import KanbanData from '@/lib/types';

export default function AddTask({
  column,
  data,
  setData,
  setAddingTask,
  currentBoardIndex,
}: {
  column: KanbanData['columns'][0];
  data: KanbanData[];
  setData: (data: KanbanData[]) => void;
  setAddingTask: (value: boolean) => void;
  currentBoardIndex: number;
}) {
  const formSchema = z.object({
    task: z
      .string()
      .min(1, {
        message: "Task can't be blank",
      })
      .max(30, { message: 'Please shorten the task name' }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { task: '' },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    const { task } = values;
    const uniqueId = createId();
    const columnId = column.id;
    const columnIndex = data[currentBoardIndex].columns.findIndex(
      (col) => col.id === columnId
    );
    const tempColumn = { ...column };
    const tempData = [...data];
    tempColumn.tasks.push({ name: task, id: uniqueId });
    tempData[currentBoardIndex].columns.splice(columnIndex, 1, tempColumn);
    setData(tempData);
    setAddingTask(false);
  }
  function handleCancel() {
    setAddingTask(false);
  }
  return (
    <Form {...form}>
      <form className='mt-4' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='task'
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
        <div className='mt-2'>
          <Button type='submit' variant='outline' className='font-bold'>
            Add
          </Button>
          <Button
            onClick={handleCancel}
            type='button'
            variant='outline'
            className='font-bold ml-1'
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
