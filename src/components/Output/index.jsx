import { useEffect, useState } from "react";

//outputArray(出力を"\n"で区切った配列)を引数として受け取る
export const Output = ({ outputArray }) => {
  const [output, setOutput] = useState([" "]);
  useEffect(() => {
    setOutput(outputArray);
  }, [outputArray]);
  return (
    <>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "0.1875rem solid #DBE2E7",
          borderRadius: "1.875rem",
          width: "100%",
          height: "12.625rem",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            padding: "8px 15px 15px 15px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: "#5A6977",
              fontWeight: "bold",
              width: "fit-content",
              margin: "0 0 6px 24px",
            }}
          >
            実行結果
          </p>
          <div
            style={{
              height: "2px",
              width: "98%",
              margin: "0 auto",
              borderRadius: "10px",
              backgroundColor: "#DBE2E7",
            }}
          />
          <div
            style={{
              marginTop: "10px",
              overflow: "auto",
              width: "100%",
              height: "9.3rem",
              color: "#5A6977",
            }}
          >
            {output && output.length > 0 ? (
              output.map((element, index) => (
                <p key={index} style={{ margin: 0 }}>
                  {element}
                </p>
              ))
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
