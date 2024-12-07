import "../Phase/index.css";
import { Book } from "./Icons/Book";
import { Delete } from "./Icons/Delete";
import { Create } from "./Icons/Create/";
import { Check } from "./Icons/Check";
import "./index.css";

export const Phase = ({ phase }) => {
  //フェーズの管理をする
  return (
    <div className="phase">
      <div className="phase-top-content">
        <p className="phase-icon">
          {phase === "read" ? <Book isState={1} /> : <Book isState={0} />}
          {phase === "delete" ? <Delete isState={1} /> : <Delete isState={0} />}
          {phase === "fix" ? <Create isState={1} /> : <Create isState={0} />}
          {phase === "answer" ? <Check isState={1} /> : <Check isState={0} />}
        </p>
        <div className="back-line" />
      </div>
      {phase === "read" ? (
        <div className="phase-bottom-content">
          <div className="phase-target">
            <p className="phase-target-word">目標１</p>
          </div>
          <p className="phase-word">コードを読み込もう！！</p>
        </div>
      ) : (
        <div></div>
      )}
      {phase === "delete" ? (
        <div className="phase-bottom-content">
          <div className="phase-target">
            <p className="phase-target-word">目標2</p>
          </div>
          <p className="phase-word">コードを消して妨害しよう！</p>
        </div>
      ) : (
        <div></div>
      )}

      {phase === "fix" ? (
        <div className="phase-bottom-content">
          <div className="phase-target">
            <p className="phase-target-word">目標3</p>
          </div>
          <p className="phase-word">コードを修復しよう！！</p>
        </div>
      ) : (
        <div></div>
      )}

      {phase === "answer" ? (
        <div className="phase-bottom-content">
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
