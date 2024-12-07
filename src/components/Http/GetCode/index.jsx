import { useEffect, useState, useContext } from "react";
import { CodeContext } from "../../../contexts/CodeContext";
const apiUrl = import.meta.env.VITE_API_URL_2;
export const GetCode = ({ roomId, player, setIsShow }) => {
  const { setCode } = useContext(CodeContext);
  const url = `${apiUrl}/getCode/${roomId}`;
  console.log(`roomId: ${roomId}, player: ${player}`);
  const sendData = { player: player, language: "c" };
  const [isFinish, setIsFinish] = useState(false);
  const get = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //JSON形式で送る
      body: JSON.stringify(sendData),
    })
      //接続できたかの確認
      .then((response) => {
        if (!response.ok) {
          throw new Error("ネットワーク応答が正常ではありません");
        }
        return response.json();
      })
      //ここのdataにレスポンスの値が入っている
      .then((data) => {
        console.log("Success:", data);
        if (data.status == "exchanged") {
          console.log(`code: ${data.code}`);
          setCode(data.code);
          setIsFinish(true);
          setIsShow(true);
        }
      })
      //エラーであった場合
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    if (!isFinish) {
      const interval = setInterval(() => {
        get();
      }, 3000); // 3秒間隔で実行

      return () => clearInterval(interval); // クリーンアップ
    }
  }, [isFinish]); // isFinishがtrueになると実行が停止
};
