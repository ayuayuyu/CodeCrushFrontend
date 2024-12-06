import "./index.css";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { MenuList } from "../../components/MenuList";

export const Title = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="title-container" onClick={() => navigate("/read")}>
        <div className="titleBox">
          <Logo />
          <p className="main-title">CodeCrush</p>
        </div>
        <p className="subtitle">read & create</p>
      </div>
      <p>Title</p>
      <div style={{ display: "flex", gap: 20 }}>
        <Logo />
        <MenuList />
      </div>
    </>
  );
};
