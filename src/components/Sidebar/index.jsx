import { Timer } from "../Timer/index";
import { Memo } from "../Memo/index";

export const Sidebar = ({ setIsFinish }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr 4fr",
        flexDirection: "column",
        width: "25%",
        padding: "0px 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        フェーズ
      </div>
      <div
        style={{
          alignContent: "center",
        }}
      >
        <Timer setIsFinish={setIsFinish} initialTime={61} />
      </div>
      <Memo />
    </div>
  );
};
