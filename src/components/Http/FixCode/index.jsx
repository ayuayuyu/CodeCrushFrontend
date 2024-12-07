import { useEffect, useState, useContext } from "react";
import { CodeContext } from "../../../contexts/CodeContext";
const apiUrl = import.meta.env.VITE_API_URL_2;
export const FixCode = ({ roomId, player, setIsShow }) => {
  const { setCode } = useContext(CodeContext);
  //エンドポイント
  const url = `${apiUrl}/fixCode/${roomId}`;
  //デバック用
  console.log(`roomId: ${roomId}, player: ${player}`);
  //POSTメソッドで送るもの
  const sendData = { player: player, language: "c" };
  //trueになるまで繰り返しhttp通信をして判定するもの
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
        //player1とplayer2どちらも送られてコードの交換ができた時
        if (data.status == "exchanged") {
          console.log(`code: ${data.code}`);
          //コードを保存する
          setCode(data.code);
          //http通信を終える
          setIsFinish(true);
          //Modalから表示するものを変更する
          setIsShow(true);
        }
      })
      //エラーであった場合
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    //isFinishがfalseの時にhttp通信を繰り返す
    if (!isFinish) {
      const interval = setInterval(() => {
        get();
      }, 3000); // 3秒間隔で実行

      return () => clearInterval(interval); // クリーンアップ
    }
  }, [isFinish]); // isFinishがtrueになると実行が停止
};
