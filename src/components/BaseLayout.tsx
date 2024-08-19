'use client';
import { useEffect, useState } from 'react';
import Board from './Board';
import Sidebar from './Sidebar';
import { defaultInfo } from '@/lib/data';
import Header from './Header';
import KanbanData from '@/lib/types';

export default function BaseLayout() {
  const [data, setData] = useState<KanbanData[]>(defaultInfo);
  const [currentBoardIndex, setCurrentBoardIndex] = useState(0);
  return (
    <div className='subpixel-antialiased flex flex-col bg-slate-100 dark:bg-gray-900 overflow-hidden min-h-full'>
      {/* Header */}
      {/* <div className="h-[100px] w-full bg-gray-200">test header</div> */}
      <Header boardName={data[currentBoardIndex]?.name} />
      <div className='flex-1 flex'>
        {/* Sidebar */}
        <Sidebar
          data={data}
          setData={setData}
          currentBoardIndex={currentBoardIndex}
          setCurrentBoardIndex={setCurrentBoardIndex}
        />

        {/* Main Content Area */}
        <div className='flex-1'>
          <Board
            data={data}
            setData={setData}
            currentBoardIndex={currentBoardIndex}
          />
        </div>
      </div>
    </div>
  );
}
