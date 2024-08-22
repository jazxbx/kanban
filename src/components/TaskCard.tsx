import { Card, CardContent, CardHeader } from './ui/card';

import { TbArrowsMove } from 'react-icons/tb';
import { FaEllipsisVertical } from 'react-icons/fa6';
import TaskCardDropdown from './TaskCardDropdown';
import KanbanData from '@/lib/types';

export default function TaskCard({
  task,
  data,
  setData,
  column,
  currentBoardIndex,
}: {
  task: KanbanData['columns'][0]['tasks'][0];
  data: KanbanData[];
  setData: (data: KanbanData[]) => void;
  column: KanbanData['columns'][0];
  currentBoardIndex: number;
}) {
  return (
    <Card className="h-[100px] md:h-[110px] w-[280px] flex flex-col shadow-lg dark:bg-gray-700'">
      <CardHeader className='p-1 flex flex-row justify-between items-center'>
        <TbArrowsMove className='m-3' />
        <TaskCardDropdown
          task={task}
          data={data}
          setData={setData}
          column={column}
          currentBoardIndex={currentBoardIndex}
        />
      </CardHeader>
      <CardContent className='text-wrap truncate font-bold text-sm md:text-base'>
        {task.name}
      </CardContent>
    </Card>
  );
}
