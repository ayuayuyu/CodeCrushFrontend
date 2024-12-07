import { Form, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/index";
import { Main } from "../../components/Main/index";
import { Header } from "../../components/Header/index";
import { useEffect, useState, useContext } from "react";
import "../index.css";
import { InputForm } from "../../components/InputForm/index";
import SendDefalutCode from "../../components/Http/SendDefalutCode";
import { CodeContext } from "../../contexts/CodeContext";
import { PlayerContext } from "../../contexts/Player";
import { RoomIdContext } from "../../contexts/RoomId";
import { CheckPlayer } from "../../components/Http/CheckPlayer";
import { SendStatus } from "../../components/Http/SendStatus";
export const Matching = () => {
  const { code, setCode } = useContext(CodeContext);
  const { roomId } = useContext(RoomIdContext);
  const { player } = useContext(PlayerContext);
  const navigate = useNavigate();
  const [isFinish, setIsFinish] = useState(false);
  const [isPlayer, setIsPlayer] = useState(false);
  const sendStatus = "read";

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

  useEffect(() => {
    if (isFinish) {
      //同じプレイヤーがいるかどうかの確かめ
      CheckPlayer({ roomId, player, setIsPlayer });
    }
  }, [isFinish]);

  useEffect(() => {
    //変更されたコードを判定するために必要
    //変更前のコードをhttp通信で送るコンポーネント
    if (isPlayer) {
      SendDefalutCode({ roomId, code });
      SendStatus({ roomId, player, sendStatus });
      navigate(`/read`);
    }
  }, [isPlayer]);
  return (
    <div className="layout">
      <Header />
      <div className="layout-inputform">
        <InputForm setIsFinish={setIsFinish} />
      </div>
    </div>
  );
};
