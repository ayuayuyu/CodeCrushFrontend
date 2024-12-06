import { Icon } from "@iconify/react";
import "../Icons/Book.css";
import { useEffect, useState } from "react";

export const Book = ({ isState }) => {
  return (
    <>
      <div className={isState ? "highlighted" : "default"}>
        <Icon icon="heroicons:book-open-solid" height="26px" />
      </div>
    </>
  );
};
