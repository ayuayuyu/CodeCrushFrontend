import { Icon } from "@iconify/react";
import "../Icons/Create.css";

export const Create = ({ isState }) => {
  return (
    <>
      <div className={isState ? "create-highlighted" : "default"}>
        <Icon icon="heroicons:pencil-solid" height="26px" />
      </div>
    </>
  );
};
