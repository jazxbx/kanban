import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

import { TbArrowsMove } from 'react-icons/tb';
import { FaEllipsisVertical } from 'react-icons/fa6';

export default function TaskCard({ task }: { task: { name: string } }) {
  return (
    <Card className='h-[100px] md:h-[110px] w-[280px] flex flex-col shadow-lg dark:bg-gray-700'>
      <CardHeader className='p-1 flex flex-row justify-between items-center'>
        <TbArrowsMove className='m-3' />
        <FaEllipsisVertical className='m-3 mt-0' />
      </CardHeader>
      <CardContent className='text-wrap truncate font-bold text-sm md:text-base'>
        {task.name}
      </CardContent>
    </Card>
  );
}
