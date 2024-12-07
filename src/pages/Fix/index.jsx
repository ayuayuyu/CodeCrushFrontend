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
  const [isShow, setIsShow] = useState(false);
  const location = useLocation();
  const showSidebar = location.pathname !== "/"; // "/" では Sidebar を非表示

  //以下コードはテスト用です
  const roomId = "12345";
  const player = "player1";
  //ここまで

  // GetCode({ roomId, player, setIsShow });
  console.log(`isShow: ${isShow}`);
  useEffect(() => {
    if (isFinish) {
      navigate("/answer");
    }
  }, [isFinish, navigate]);

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
