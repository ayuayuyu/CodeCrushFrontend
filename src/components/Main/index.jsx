import { useState, useContext } from "react";
import { Code } from "../Code";
import { Output } from "../Output/index";
import { Player } from "../Player";
import { Run } from "../Run";
import { DocumentButton } from "./../CodeDocument/Button";
import "./index.css";
import { CodeDocument } from "../CodeDocument/Docment";
import { CodeContext } from "../../contexts/CodeContext";

export const Main = ({ editFlag }) => {
  const { code, setCode } = useContext(CodeContext);
  const [outputArray, setOutputArray] = useState([]);
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);

  return (
    <div className="main-container">
      <div
        style={{
          display: "flex",
          gap: isDocumentOpen ? "20px" : 0,
          height: "55vh",
        }}
      >
        <div className={`main-inner ${isDocumentOpen ? "open" : ""}`}>
          <div className="main-header">
            <Player pattern={1} />
            <Run code={code} setOutputArray={setOutputArray} />
            <DocumentButton setIsDocumentOpen={setIsDocumentOpen} />
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
        {isDocumentOpen ? <CodeDocument /> : <div />}
      </div>
      <Output outputArray={outputArray} />
    </div>
  );
};
