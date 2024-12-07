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
        <Code code={code} setCode={setCode} />
      </div>
      <Output outputArray={outputArray} />
    </div>
  );
};
