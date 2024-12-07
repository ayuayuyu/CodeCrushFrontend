import { Icon } from "@iconify/react";

export const DocumentButton = ({ setIsDocumentOpen }) => {
  const handleClick = () => {
    setIsDocumentOpen((prev) => !prev);
  };
  return (
    <div
      onClick={handleClick}
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "30px",
        backgroundColor: "#EDF1F4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon
        icon="heroicons:document-solid"
        style={{
          fontSize: "20px",
          color: "#C7D2DB",
        }}
      />
    </div>
  );
};
