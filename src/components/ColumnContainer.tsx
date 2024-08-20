import { ScrollArea, ScrollBar } from '../components/ui/scroll-area';
import Column from '@/components/Board/Column';

export default function ColumnContainer({ data, setData, currentBoardIndex }) {
  return (
    <ScrollArea className='flex-1 overflow-x-auto'>
      <div className='flex flex-row gap-10 p-10 w-full min-h-screen overflow-scroll'>
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
      </div>
      <ScrollBar orientation='horizontal' className='w-full' />
    </ScrollArea>
  );
}
