import "../InputForm/index.css";
import { RoomIdContext } from "../../contexts/RoomId";
import { PlayerContext } from "../../contexts/Player";
import { Player } from "../Player";
import { useContext } from "react";
export const InputForm = ({ setIsFinish }) => {
  //roomIdを入力
  const { roomId, setRoomId } = useContext(RoomIdContext);
  //playerの入力
  const { player, setPlayer } = useContext(PlayerContext);

  //roomIdをセットする
  const handleRoomIdChange = (e) => {
    setRoomId(e.target.value);
  };
  //playerと判定の入力
  const handleSubmit = (players) => {
    setPlayer(players);
    //playerの入力の終了
    setIsFinish(true);
  };
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
            onChange={handleRoomIdChange}
            placeholder="あいことばを入力"
          />
        </div>
        <div className="select-player">
          <Player pattern={5} />
          <div className="button-box">
            <button
              className={`button-player ${
                player === "player1" ? "active" : ""
              }`}
              onClick={() => handleSubmit("player1")}
            >
              プレイヤー１
            </button>
            <button
              className={`button-player ${
                player === "player2" ? "active" : ""
              }`}
              onClick={() => handleSubmit("player2")}
            >
              プレイヤー２
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
