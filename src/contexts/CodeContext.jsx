import { createContext, useState } from "react";

// コードの状態管理を行うためのContextを作成
const CodeContext = createContext();

export const CodeProvider = ({ children }) => {
  // メモの内容を管理するための状態を定義
  const [code, setCode] = useState("");
  return (
    <CodeContext.Provider value={{ code, setCode }}>
      {children}
    </CodeContext.Provider>
  );
};

export { CodeContext };
