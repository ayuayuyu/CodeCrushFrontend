import "./index.css";
import { useNavigate } from "react-router-dom";

export const Title = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="title-container" onClick={() => navigate("/read")}>
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
      <p>Title</p>
    </>
  );
};
