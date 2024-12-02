import img from "../../../assets/bookIcon.svg";

export const Book = () => {
  return (
    <>
      <div
        style={{
          borderRadius: "12px",
          border: "solid 3px #FFC80B",
          width: "48px",
          height: "48px",
          background: "#FFF6D6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={img} />
      </div>
    </>
  );
};
