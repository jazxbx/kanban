import ColumnContainer from "./ColumnContainer";

export default function Board({ data, setData, currentBoardIndex }) {
  return (
    <>
      <ColumnContainer
        data={data}
        setData={setData}
        currentBoardIndex={currentBoardIndex}
      />
    </>
  );
}
