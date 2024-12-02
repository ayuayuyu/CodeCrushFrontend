import { useState } from "react";
import { Timer } from "../../components/Timer";

export const Read = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 62);
  const [isFinish, serIsFinish] = useState(0);
  return (
    <>
      <Timer expiryTimestamp={time} setIsFinish={serIsFinish} />
      <p>{isFinish}</p>
    </>
  );
};
