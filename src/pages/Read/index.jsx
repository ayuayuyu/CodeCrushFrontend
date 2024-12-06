import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
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
      </div>
    </>
  );
};
