import { useState } from "react";
import { Code } from "../Code";
import { Output } from "../Output/index";
import { Player } from "../Player";
import { Run } from "../Run";
import "./index.css";

export const Main = () => {
  const [code, setCode] = useState("");
  const [outputArray, setOutputArray] = useState([]);

  return (
    <div className="main-container">
      <div className="main-inner">
        <div className="main-header">
          <Player pattern={1} />
          <Run code={code} setOutputArray={setOutputArray} />
          仕様書
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
        <Code code={code} setCode={setCode} />
      </div>
      <Output outputArray={outputArray} />
    </div>
  );
};
