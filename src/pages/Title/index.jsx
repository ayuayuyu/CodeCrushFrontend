import SendDefalutCode from "../../components/Http/SendDefalutCode";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { CodeContext } from "../../contexts/CodeContext";

export const Title = () => {
  const navigate = useNavigate();
  //最初にコードの取得をする
  const { code, setCode } = useContext(CodeContext);
  //以下はテストコードのためのものです
  const roomId = "12345";
  //ここまで

  const handleSubmit = () => {
    navigate("/match");
  };

  return (
    <>
      <div className="title-container" onClick={() => handleSubmit()}>
        <div className="titleBox">
          <img
            src="/CodeCrushLogo.svg"
            alt="titleLogo"
            style={{
              width: "500px",
              height: "auto",
            }}
          />
        </div>
        <p className="subtitle">read & create</p>
      </div>
    </>
  );
};
