import { useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/index";
import { Main } from "../../components/Main/index";
import { Header } from "../../components/Header/index";
import { useState, useEffect } from "react";
import "../index.css";
import { GetCode } from "../../components/Http/GetCode";
import { Modal } from "../../components/Modal";

export const Fix = () => {
  const navigate = useNavigate();
  const [isFinish, setIsFinish] = useState(false);
  //コードを受け取ったらtrueになる
  const [isShow, setIsShow] = useState(false);
  const location = useLocation();
  const showSidebar = location.pathname !== "/"; // "/" では Sidebar を非表示

  //以下コードはテスト用です
  const roomId = "12345";
  const player = "player1";
  //ここまで

  //相手の変更されたコードを受け取るhttp通信のコンポーネント
  GetCode({ roomId, player, setIsShow });

  useEffect(() => {
    if (isFinish) {
      navigate("/answer");
    }
  }, [isFinish, navigate]);

  //isShowがfalseの時にModalコンポーネントを表示する
  return (
    <>
      {!isShow ? (
        <Modal />
      ) : (
        <div className="layout">
          <Header />
          {showSidebar && (
            <div className="layout-main">
              <Sidebar setIsFinish={setIsFinish} />
              <Main />
            </div>
          )}
        </div>
      )}
    </>
  );
};
