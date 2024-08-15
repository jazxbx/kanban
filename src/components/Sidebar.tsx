import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function Sidebar({
  data,
  setData,
  currentBoardIndex,
  setCurrentBoardIndex,
}) {
  function handleOnClick(i) {
    return setCurrentBoardIndex(i);
  }
  return (
    <Card className="w-[300px] h-full bg-gray-50 dark:bg-gray-600">
      <CardHeader className="text-xl font-bold">
        <div className="flex flex-row justify-between items-center">
          <div>Your Boards</div>
          <div>
            <Button variant="ghost" className="text-2xl">
              +
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {data.map((board, i) => (
          <Button
            variant="ghost"
            onClick={() => handleOnClick(i)}
            key={board.id}
          >
            {board.name}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
