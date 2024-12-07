import { Sidebar } from "../../components/Sidebar/index";
import { Main } from "../../components/Main/index";
import { Header } from "../../components/Header/index";
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../index.css";
import SendCrushCode from "../../components/Http/SendCrushCode";
import { CodeContext } from "../../contexts/CodeContext";

export const Delete = () => {
  const navigate = useNavigate();
  const [isFinish, setIsFinish] = useState(false);
  const { code } = useContext(CodeContext);
  console.log(`codeDelete: ${code}`);
  const location = useLocation();
  const showSidebar = location.pathname !== "/"; // "/" では Sidebar を非表示

  //以下コードはテスト用に作ります,
  const roomId = "12345";
  const player = "player1";
  //ここまでです。

  useEffect(() => {
    if (isFinish) {
      SendCrushCode({ code, roomId, player });
      navigate("/fix");
    }
  }, [isFinish, navigate]);

  return (
    <div className="layout">
      <Header />
      {showSidebar && (
        <div className="layout-main">
          <Sidebar setIsFinish={setIsFinish} />
          <Main />
        </div>
      )}
    </div>
  );
};
