import { Code } from "../Code";
import { Output } from "../Output/index";
import { Player } from "../Player";
import { Run } from "../Run";
import "./index.css";

export const Main = () => {
  return (
    <div className="main-container">
      <div className="main-inner">
        <div className="main-header">
          <Player />
          <Run />
          仕様書
        </div>
        <Code />
      </div>
      <Output />
    </div>
  );
};
