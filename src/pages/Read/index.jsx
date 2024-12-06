import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Main } from "../../components/Main";
import "./index.css";

export const Read = () => {
  const [isFinish, setIsFinish] = useState(false);

  return (
    <>
      <div
        style={{
          paddingTop: "100px",
          height: "90%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Sidebar setIsFinish={setIsFinish} />
        <Main />
      </div>
    </>
  );
};
