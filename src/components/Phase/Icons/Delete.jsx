import { Icon } from "@iconify/react";
export const Delete = () => {
  return (
    <>
      <div
        style={{
          borderRadius: "12px",
          border: "solid 3px #E54671",
          color: "#E54671",
          width: "48px",
          height: "48px",
          background: "#FFE3E3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon icon="material-symbols:ink-eraser-outline" height="26px" />
      </div>
    </>
  );
};
