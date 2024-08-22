import { Button } from './ui/button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { createId } from '@/lib/createId';
import KanbanData from '@/lib/types';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

export default function AddBoard({
  data,
  setData,
  setAddingBoard,
}: {
  data: KanbanData[];
  setData: (data: KanbanData[]) => void;
  setAddingBoard: (value: boolean) => void;
}) {
  const formSchema = z.object({
    board: z
      .string()
      .min(1, {
        message: "Board name can't be blank",
      })
      .max(20, { message: 'Please shorten the board name' }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { board: '' },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    const { board } = values;
    const uniqueId = createId();
    const tempData: KanbanData[] = [...data];
    tempData.push({ name: board, id: uniqueId, columns: [] });
    setData(tempData);
    setAddingBoard(false);
  }
  function handleCancel() {
    setAddingBoard(false);
  }

  return (
    <Form {...form}>
      <form className='mt-4' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='board'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} className='border-black dark:border-white' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='mt-2'>
          <Button type='submit' variant='outline'>
            Add
          </Button>
          <Button
            onClick={handleCancel}
            type='button'
            variant='outline'
            className='ml-1'
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
