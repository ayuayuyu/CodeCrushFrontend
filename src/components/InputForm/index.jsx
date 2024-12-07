import { useState } from "react";
import "../InputForm/index.css";
import { Player } from "../Player";
export const InputForm = () => {
  const [roomId, setRoomId] = useState("");
  const [player, setPlayer] = useState("");

  return (
    <div className="input-box">
      <div className="title">プレイヤーマッチング</div>
      <div className="content">
        <Player pattern={4} />
        <div className="input-pass">
          <div className="input-pass-ptug">
            <p>対戦相手とマッチングするための合言葉を入力してください。 </p>
            <p>同じ合言葉を入力したプレイヤー同士がマッチングします。</p>
          </div>
          <input
            className="input-pass-box"
            type="text"
            value={roomId}
            onChange={(value) => setRoomId(value.target.value)}
            placeholder="あいことばを入力"
          />
        </div>
        <div className="select-player">
          <Player pattern={5} />
          <div className="button-box">
            <button
              className="button-player"
              onClick={() => setPlayer("player1")}
            >
              プレイヤー１
            </button>
            <button
              className="button-player"
              onClick={() => setPlayer("player2")}
            >
              プレイヤー２
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
