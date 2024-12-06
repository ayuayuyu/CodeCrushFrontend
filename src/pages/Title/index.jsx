import "./index.css";
import { useNavigate } from "react-router-dom";

export const Title = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="title-container" onClick={() => navigate("/read")}>
        <div className="titleBox">
          <div className="logo">{/* <Logo /> */}</div>
          <p className="main-title">CodeCrush</p>
        </div>
        <p className="subtitle">read & create</p>
      </div>
      <p>Title</p>
    </>
  );
};
