import { useContext } from "react";
import { MemoContext } from "./../../contexts/MemoContext";

export const Memo = () => {
  const { memoContents, setMemoContents } = useContext(MemoContext);

  return (
    <div style={{ boxShadow: "0 0 10px #00000010", borderRadius: "30px" }}>
      <div
        style={{
          color: "#5A6977",
          fontSize: "16px",
          fontWeight: "bold",
          marginLeft: "24px",
          paddingTop: "8px",
          paddingBottom: "6px",
        }}
      >
        メモ
      </div>
      <div
        style={{
          height: "2px",
          width: "97%",
          margin: "0 auto",
          borderRadius: "10px",
          backgroundColor: "#DBE2E7",
        }}
      />
      <textarea
        id="story"
        name="story"
        rows="5"
        style={{
          display: "block",
          width: "96.8%",
          color: "#5A6977",
          margin: "0 auto",
          resize: "none",
          border: "none",
          outline: "none",
        }}
        value={memoContents}
        onChange={(e) => {
          setMemoContents(e.target.value);
        }}
      ></textarea>
    </div>
  );
};
