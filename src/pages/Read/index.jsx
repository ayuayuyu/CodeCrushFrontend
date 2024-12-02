import { useState } from "react";
import { Timer } from "../../components/Timer";

export const Read = () => {
  const [isFinish, serIsFinish] = useState(0);
  return (
    <>
      <Timer setIsFinish={serIsFinish} initialTime={62} />
      <p>{isFinish}</p>
    </>
  );
};
