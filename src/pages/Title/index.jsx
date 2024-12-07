import SendDefalutCode from "../../components/Http/SendDefalutCode";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Title = () => {
  const navigate = useNavigate();

  //以下はテストコードのためのものです
  const [code, setCode] = useState("");
  const roomId = "12345";
  // ファイルからコードを取得してコードエディタ上に表示させる
  useEffect(() => {
    fetch("/exercise01.c")
      .then((response) => {
        if (!response.ok) {
          throw new Error("ファイルの読み込みに失敗しました");
        }
        return response.text();
      })
      .then((text) => {
        setCode(text);
      })
      .catch((error) => {
        console.error("エラー:", error);
      });
  }, []);
  //ここまで

  const handleSubmit = () => {
    SendDefalutCode({ roomId, code });
    navigate("/read");
  };

  return (
    <>
      <div className="title-container" onClick={() => handleSubmit()}>
        <div className="titleBox">
          <img
            src="/CodeCrushLogo.svg"
            alt="titleLogo"
            style={{
              width: "500px",
              height: "auto",
            }}
          />
        </div>
        <p className="subtitle">read & create</p>
      </div>
    </>
  );
};
