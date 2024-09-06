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
import { Card, CardContent } from './ui/card';

export default function AddColumn({
  data,
  setData,
  setAddingColumn,
  currentBoardIndex,
}: {
  data: KanbanData[];
  setData: (data: KanbanData[]) => void;
  setAddingColumn: (value: boolean) => void;
  currentBoardIndex: number;
}) {
  const formSchema = z.object({
    column: z
      .string()
      .min(1, {
        message: "Column can't be blank",
      })
      .max(20, { message: 'Column too long' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { column: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const columnName: string = values.column;
    const uniqueId: string = createId();
    const tempData: KanbanData[] = [...data];
    const newColumn = {
      id: uniqueId,
      name: columnName,
      tasks: [],
    };
    tempData[currentBoardIndex].columns.push(newColumn);
    setData(tempData);
    setAddingColumn(false);
  }

  function handleCancel() {
    setAddingColumn(false);
  }

  return (
    <Card className='max-h-[81vh] h-fit shadow bg-gray-50  dark:bg-gray-600 min-w-[280px]'>
      <CardContent className='overflow-auto max-h-[calc(81vh-6.5rem)]'>
        <Form {...form}>
          <form className='mt-4' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='column'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className='input'
                      {...field}
                      placeholder='Enter column name...'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex mt-2'>
              <Button type='submit' variant='outline' className='font-bold'>
                add column
              </Button>
              <Button
                onClick={handleCancel}
                type='button'
                variant='destructive'
                className='font-bold ml-1'
              >
                x
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
