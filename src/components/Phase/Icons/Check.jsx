import { Icon } from "@iconify/react";
export const Check = () => {
  return (
    <>
      <div
        style={{
          borderRadius: "12px",
          color: "#6495ED",
          border: "solid 3px #6495ED",
          width: "48px",
          height: "48px",
          background: "#87CEEB",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon icon="heroicons:document-check" height="26px" />
      </div>
    </>
  );
};
