import SendDefalutCode from "../../components/Http/SendDefalutCode";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CodeContext } from "../../contexts/CodeContext";

export const Title = () => {
  const navigate = useNavigate();
  //最初にコードの取得をする
  const { code, setCode } = useContext(CodeContext);
  //以下はテストコードのためのものです
  const roomId = "12345";
  //ここまで

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

  const handleSubmit = () => {
    //変更されたコードを判定するために必要
    //変更前のコードをhttp通信で送るコンポーネント
    SendDefalutCode({ roomId, code });
    navigate("/match");
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
