import { useState } from "react";
import { Timer } from "../../components/Timer";
import { MenuList } from "../../components/MenuList";

export const Read = () => {
  const [isFinish, serIsFinish] = useState(false);
  return (
    <>
      <Timer setIsFinish={serIsFinish} initialTime={61} />
      <p>{isFinish ? "true" : "false"}</p>
      <MenuList />
    </>
  );
};
