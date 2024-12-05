import { useState } from "react";
import { Timer } from "../../components/Timer";
import { Memo } from "../../components/Memo";

export const Read = () => {
  const [isFinish, serIsFinish] = useState(false);
  return (
    <>
      <Timer setIsFinish={serIsFinish} initialTime={61} />
      <p>{isFinish ? "true" : "false"}</p>
      <Memo />
    </>
  );
};
