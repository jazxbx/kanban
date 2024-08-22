import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { useState } from 'react';
import AddTask from './AddTask';
import { Button } from './ui/button';

import KanbanData from '@/lib/types';
import TaskCard from './TaskCard';

export default function Column({
  column,
  data,
  setData,
  currentBoardIndex,
}: {
  column: KanbanData['columns'][0];
  data: KanbanData[];
  setData: (data: KanbanData[]) => void;
  currentBoardIndex: number;
}) {
  const [addingTask, setAddingTask] = useState(false);
  return (
    <Card className='h-fit shadow bg-gray-50  dark:bg-gray-600 '>
      <CardHeader>
        <CardTitle className='text-ellipsis'>{column.name}</CardTitle>
      </CardHeader>
      <CardContent className='p-5 md:p-6'>
        <div className='flex flex-col gap-3'>
          {column.tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
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
