import { Timer } from "../Timer/index";
import { Memo } from "../Memo/index";
import { Phase } from "../Phase/index";

export const Sidebar = ({ setIsFinish }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20vw",
        backgroundColor: "#F3F5F6",
        gap: "20px",
      }}
    >
      <Phase />
      <div
        style={{
          alignContent: "center",
        }}
      >
        <Timer setIsFinish={setIsFinish} initialTime={10} />
      </div>
      <Memo />
    </div>
  );
};
