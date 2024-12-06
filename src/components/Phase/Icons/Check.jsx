import { Icon } from "@iconify/react";
import "../Icons/Check.css";
import { useEffect, useState } from "react";

export const Check = ({ isState }) => {
  return (
    <>
      <div className={isState ? "highlighted" : "default"}>
        <Icon icon="heroicons:document-check-solid" height="30px" />
      </div>
    </>
  );
};
