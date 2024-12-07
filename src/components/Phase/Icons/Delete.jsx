import { Icon } from "@iconify/react";
import "../Icons/Delete.css";

export const Delete = ({ isState }) => {
  return (
    <>
      <div className={isState ? "highlighted" : "default"}>
        <Icon icon="material-symbols:ink-eraser" height="26px" />
      </div>
    </>
  );
};
