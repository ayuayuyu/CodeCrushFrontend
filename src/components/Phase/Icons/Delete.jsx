import { Icon } from "@iconify/react";
import "../Icons/Delete.css";

export const Delete = ({ isState }) => {
  return (
    <>
      <div className={isState ? "delete-highlighted" : "default"}>
        <Icon icon="material-symbols:ink-eraser" height="26px" />
      </div>
    </>
  );
};
