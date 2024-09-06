import { ScrollArea, ScrollBar } from '../components/ui/scroll-area';
import Column from './Column';
import KanbanData from '@/lib/types';
import { Button } from './ui/button';
import { useState } from 'react';
import AddColumn from './AddColumn';

export default function ColumnContainer({
  data,
  setData,
  currentBoardIndex,
}: {
  data: KanbanData[];
  setData: (data: KanbanData[]) => void;
  currentBoardIndex: number;
}) {
  const [addColumn, setAddColumn] = useState(false);

  return (
    <ScrollArea>
      <div className='flex flex-row gap-10 pt-10 pl-5 pr-5 w-full h-screen overflow-scroll'>
        {data[currentBoardIndex].columns.map((col) => {
          return (
            <Column
              column={col}
              data={data}
              setData={setData}
              currentBoardIndex={currentBoardIndex}
              key={col.id}
            />
          );
        })}
        {addColumn ? (
          <AddColumn
            data={data}
            setData={setData}
            setAddingColumn={setAddColumn}
            currentBoardIndex={currentBoardIndex}
          />
        ) : (
          <Button
            className='pr-11 bg-indigo-900  dark:bg-gray-600 text-white'
            onClick={() => setAddColumn(true)}
          >
            + Add Column
          </Button>
        )}
      </div>
      <ScrollBar orientation='horizontal' className='w-full' />
    </ScrollArea>
  );
}
