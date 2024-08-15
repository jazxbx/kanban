import { useState } from "react";
import Board from "./Board";
import Sidebar from "./Sidebar";
import defaultInfo from "@/lib/data";

const [data, setData] = useState(defaultInfo);

export default function Main() {
  return (
    <>
      <div>
        {/* <Header data={data} /> */}
        <Sidebar data={data} />
      </div>
      <Board data={data} />
    </>
  );
}
