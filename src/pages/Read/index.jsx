import { useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/index";
import { Main } from "../../components/Main/index";
import { Header } from "../../components/Header/index";
import { useEffect, useState } from "react";
import "../index.css";
export const Read = () => {
  const [pageState, setPageState] = useState("read");
  const [isFinish, setIsFinish] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const showSidebar = location.pathname !== "/"; // "/" では Sidebar を非表示

  useEffect(() => {
    if (isFinish) {
      navigate("/delete");
    }
  }, [isFinish, navigate]);

  return (
    <div className="layout">
      <Header />
      {showSidebar && (
        <div className="layout-main">
          <Sidebar
            setIsFinish={setIsFinish}
            initialTime={180}
            phase={pageState}
          />
          <Main editFlag={false} phase={pageState} />
        </div>
      )}
    </div>
  );
};
