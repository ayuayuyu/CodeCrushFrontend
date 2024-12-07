import { Sidebar } from "../../components/Sidebar/index";
import { Main } from "../../components/Main/index";
import { Header } from "../../components/Header/index";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../index.css";

export const Delete = () => {
  const navigate = useNavigate();
  const [isFinish, setIsFinish] = useState(false);
  const location = useLocation();
  const showSidebar = location.pathname !== "/"; // "/" では Sidebar を非表示

  if (isFinish) {
    navigate("/fix");
  }

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
