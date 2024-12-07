import { useState, useContext, useEffect } from "react";
import { Code } from "../Code";
import { Output } from "../Output/index";
import { Player } from "../Player";
import { Run } from "../Run";
import { DocumentButton } from "./../CodeDocument/Button";
import "./index.css";
import { CodeDocument } from "../CodeDocument/Docment";
import { CodeContext } from "../../contexts/CodeContext";
import { RoomIdContext } from "../../contexts/RoomId";
import { GetStatus } from "../Http/GetStatus";
import { PlayerContext } from "../../contexts/Player";

export const Main = ({ editFlag, phase }) => {
  const { code, setCode } = useContext(CodeContext);
  const [outputArray, setOutputArray] = useState([]);
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);
  const { roomId, setRoomId } = useContext(RoomIdContext);
  const [state, setState] = useState("");
  GetStatus({ roomId, setState });
  console.log(`mainStatus: ${state}`);

  // const phaseStatus = "answer";
  useEffect(() => {
    if (phase === "answer") {
      setIsDocumentOpen(true);
    }
  }, [phase]);

  return (
    <div className="main-container">
      <div
        style={{
          display: "flex",
          gap: isDocumentOpen ? "20px" : 0,
          height: "55vh",
          justifyContent: "space-between",
        }}
      >
        <div className={`main-inner ${isDocumentOpen ? "open" : ""}`}>
          <div className="main-header">
            <Player pattern={1} />
            {phase !== "answer" ? (
              <>
                <Run code={code} setOutputArray={setOutputArray} />
                <DocumentButton setIsDocumentOpen={setIsDocumentOpen} />
              </>
            ) : (
              <></>
            )}
          </div>
          <div
            style={{
              height: "2px",
              width: "99.8%",
              margin: "0 auto 6px auto",
              borderRadius: "10px",
              backgroundColor: "#DBE2E7",
            }}
          />
          <Code isCanEdit={editFlag} />
        </div>
        {phase === "answer" ? (
          <div className={`main-inner ${isDocumentOpen ? "answer-open" : ""}`}>
            <div className="main-header">
              <Player pattern={3} />
            </div>
            <div
              style={{
                height: "2px",
                width: "99.8%",
                margin: "0 auto 6px auto",
                borderRadius: "10px",
                backgroundColor: "#DBE2E7",
              }}
            />
            <Code isCanEdit={editFlag} />
          </div>
        ) : (
          <> {isDocumentOpen ? <CodeDocument /> : <></>}</>
        )}
      </div>
      <Output outputArray={outputArray} />
    </div>
  );
};
