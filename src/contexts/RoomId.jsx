import { createContext, useState } from "react";

// コードの状態管理を行うためのContextを作成
const RoomIdContext = createContext("");

export const RoomIdProvider = ({ children }) => {
  // コードの内容を管理するための状態を定義
  const [roomId, setRoomId] = useState("");
  return (
    <RoomIdContext.Provider value={{ roomId, setRoomId }}>
      {children}
    </RoomIdContext.Provider>
  );
};

export { RoomIdContext };
