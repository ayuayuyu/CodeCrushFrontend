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
          //border: "0.1875rem solid #DBE2E7",
          borderRadius: "1.875rem",
          //width: "52.75rem",
          height: "12.625rem",
        }}
      >
        <div
          style={{
            padding: "15px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: "#5A6977",
              width: "100%",
              borderBottom: "0.125rem solid #DBE2E7",
            }}
          >
            実行結果
          </p>
          <div
            style={{
              overflow: "auto",
              width: "100%",
              height: "7.375rem",
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
