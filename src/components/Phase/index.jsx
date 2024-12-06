import { Create } from "../../components/Phase/Icons/Create";
import { Book } from "./../../components/Phase/Icons/Book";
import { Delete } from "./../../components/Phase/Icons/Delete";
import { Check } from "../../components/Phase/Icons/Check";
import { useState } from "react";
import "./index.css";

export const Phase = () => {
  const [phase, setPhase] = useState("explanation");
  //0,1,2,3でフェーズの管理をする
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {phase === "explanation" ? <Book isState={1} /> : <Book isState={0} />}
      {phase === "crush" ? <Delete isState={1} /> : <Delete isState={0} />}
      {phase === "fix" ? <Create isState={1} /> : <Create isState={0} />}
      {phase === "result" ? <Check isState={1} /> : <Check isState={0} />}
    </div>
  );
};
