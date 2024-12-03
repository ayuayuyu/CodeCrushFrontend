import { createContext, useState } from "react";

const MemoContext = createContext();

export const MemoProvider = ({ children }) => {
  const [memoContents, setMemoContents] = useState("");
  return (
    <MemoContext.Provider value={{ memoContents, setMemoContents }}>
      {children}
    </MemoContext.Provider>
  );
};

export { MemoContext };
