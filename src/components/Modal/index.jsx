import "./index.css";
export const Modal = () => {
  return (
    <>
      <div className="center">
        <div className="loader">
          <span className="dot">|</span>
          <span className="dot">-</span>
          <span className="dot">/</span>
          <span className="dot">+</span>
        </div>
        <div className="textArea">
          <p>
            Loading
            <span className="dot2">.</span>
            <span className="dot2">.</span>
            <span className="dot2">.</span>
          </p>
        </div>
      </div>
    </>
  );
};
