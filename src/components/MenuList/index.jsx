import { useState } from "react";
import { Link } from "react-router-dom";

export const MenuList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleHover = () => {
    setIsHover((prev) => !prev);
  };

  return (
    <div
      style={{
        border: "3px solid #DBE2E7",
        borderRadius: "24px",
        width: "fit-content",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          borderRadius: "24px",
          backgroundColor: "#ffffff",
          border: "none",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          color: "#5A6C77",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "0.2s",
        }}
      >
        <div>メニューを開く</div>
        <div
          style={{
            height: "22px",
            width: "2px",
            borderRadius: "10px",
            backgroundColor: "#DBE2E7",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            transform: isOpen ? "translateX(0)" : "translateX(-3px)",
            transition: "0.2s",
          }}
        >
          <div
            style={{
              height: "2px",
              width: "18px",
              borderRadius: "10px",
              backgroundColor: "#5A6C77",
              transformOrigin: "left",
              transform: isOpen
                ? "rotate(45deg) translateX(1px)"
                : "rotate(0deg) translateX(0px)",
              transition: "0.2s",
            }}
          ></div>
          <div
            style={{
              height: "2px",
              width: "18px",
              borderRadius: "10px",
              backgroundColor: "#5A6C77",
              opacity: isOpen ? "0%" : "100%",
              transition: "0.1s",
            }}
          ></div>
          <div
            style={{
              height: "2px",
              width: "18px",
              borderRadius: "10px",
              backgroundColor: "#5A6C77",
              transformOrigin: "left",
              transform: isOpen
                ? "rotate(-45deg) translateX(1px)"
                : "rotate(0deg) translateX(0)",
              transition: "0.2s",
            }}
          ></div>
        </div>
      </button>
      <Link
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        style={{
          backgroundColor: "#ffffff00",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "24px",
          border: "none",
          color: isHover ? "#EF6D90" : "#E54671",
          display: "Block",
          textDecoration: "none",
          marginTop: isOpen ? "0px" : "-36px",
          opacity: isOpen ? "100%" : "0%",
          pointerEvents: isOpen ? "auto" : "none",
          transition: "0.2s",
        }}
        to="/"
      >
        ゲームを終わる
      </Link>
    </div>
  );
};
