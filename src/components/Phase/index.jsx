import "../Phase/index.css";
import { Book } from "./Icons/Book";
import { Delete } from "./Icons/Delete";
import { Create } from "./Icons/Create";
import { Check } from "./Icons/Check";
import { useState } from "react";
import "./index.css";

export const Phase = () => {
  const [phase, setPhase] = useState("result");
  //フェーズの管理をする
  return (
    <div className="phase">
      <p className="phase-icon">
        {phase === "explanation" ? <Book isState={1} /> : <Book isState={0} />}
        {phase === "crush" ? <Delete isState={1} /> : <Delete isState={0} />}
        {phase === "fix" ? <Create isState={1} /> : <Create isState={0} />}
        {phase === "result" ? <Check isState={1} /> : <Check isState={0} />}
      </p>
      {phase === "explanation" ? (
        <div>
          <div className="phase-target">
            <p className="phase-target-word">目標１</p>
          </div>
          <p className="phase-word">コードを読み込もう！！</p>
        </div>
      ) : (
        <div></div>
      )}
      {phase === "crush" ? (
        <div>
          <div className="phase-target">
            <p className="phase-target-word">目標2</p>
          </div>
          <p className="phase-word">コードを消して妨害しよう！</p>
        </div>
      ) : (
        <div></div>
      )}

      {phase === "fix" ? (
        <div>
          <div className="phase-target">
            <p className="phase-target-word">目標3</p>
          </div>
          <p className="phase-word">コードを修復しよう！！</p>
        </div>
      ) : (
        <div></div>
      )}

      {phase === "result" ? (
        <div>
          <div className="phase-target">
            <p className="phase-target-word">目標4</p>
          </div>
          <p className="phase-word">答え合わせ！！</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
