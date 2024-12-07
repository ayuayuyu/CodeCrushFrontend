import { useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/index";
import { Main } from "../../components/Main/index";
import { Header } from "../../components/Header/index";
import { useState, useEffect, useContext } from "react";
import "../index.css";
import { FixCode } from "../../components/Http/FixCode";
import { Modal } from "../../components/Modal";
import { RoomIdContext } from "../../contexts/RoomId";
import { PlayerContext } from "../../contexts/Player";

export const Fix = () => {
  const navigate = useNavigate();
  const [isFinish, setIsFinish] = useState(false);
  const { roomId } = useContext(RoomIdContext);
  const { player } = useContext(PlayerContext);
  //コードを受け取ったらtrueになる
  const [isShow, setIsShow] = useState(false);
  const location = useLocation();
  const showSidebar = location.pathname !== "/"; // "/" では Sidebar を非表示

  //相手の変更されたコードを受け取るhttp通信のコンポーネント
  FixCode({ roomId, player, setIsShow });

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
              <Main editFlag={true} />
            </div>
          )}
        </div>
      )}
    </>
  );
};
