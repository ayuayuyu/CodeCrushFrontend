import { createContext, useState } from "react";

// コードの状態管理を行うためのContextを作成
const PlayerContext = createContext("");

export const PlayerProvider = ({ children }) => {
  // コードの内容を管理するための状態を定義
  const [player, setPlayer] = useState("");
  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerContext };
