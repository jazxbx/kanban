import { ScrollArea } from '@radix-ui/react-scroll-area';
import { ScrollBar } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { useState } from 'react';
import AddTask from './AddTask';
import { Button } from './ui/button';
import TaskCard from '../components/TaskCard';

export default function Column({ column, data, setData, currentBoardIndex }) {
  const [addingTask, setAddingTask] = useState(false);
  return (
    <Card className='min-w-[336px] h-fit shadow bg-gray-50 dark:bg-gray-600'>
      <CardHeader>
        <CardTitle className='text-ellipsis'>{column.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className='min-h-[110px] min-w-[280px]'>
          <div className='flex flex-col gap-3'>
            {column.tasks.map((task) => (
              <TaskCard task={task} key={task.id} />
            ))}
          </div>
          <ScrollBar orientation='vertical' />
        </ScrollArea>
        {addingTask ? (
          <AddTask
            column={column}
            data={data}
            setData={setData}
            setAddingTask={setAddingTask}
            currentBoardIndex={currentBoardIndex}
          />
        ) : (
          <Button
            onClick={() => setAddingTask(true)}
            className='font-bold mt-3'
            variant='ghost'
          >
            Add Task +
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
