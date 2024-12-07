import { useEffect, useState } from "react";

export const CodeDocument = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    fetch("/CodeDocument.txt")
      .then((response) => {
        if (!response.ok) {
          throw new Error("ファイルの読み込みに失敗しました");
        }
        return response.text();
      })
      .then((text) => {
        setText(text);
      })
      .catch((error) => {
        console.error("エラー:", error);
      });
  }, []);

  return (
    <div
      style={{
        border: "3px solid #DBE2E7",
        borderRadius: "30px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "438px",
      }}
    >
      <div
        style={{
          color: "#5A6977",
          fontSize: "16px",
          fontWeight: "bold",
          marginLeft: "24px",
          paddingTop: "20px",
          paddingBottom: "10px",
        }}
      >
        仕様書
      </div>
      <div
        style={{
          height: "2px",
          width: "90%",
          margin: "0 auto 14px auto",
          borderRadius: "10px",
          backgroundColor: "#DBE2E7",
        }}
      />
      <pre
        style={{
          color: "#5A6977",
          display: "block",
          width: "86%",
          marginTop: "16px",
          margin: "0 auto",
          resize: "none",
          border: "none",
          outline: "none",
          overflowY: "scroll",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
        }}
      >
        {text}
      </pre>
    </div>
  );
};
