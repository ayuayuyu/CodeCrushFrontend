import { Icon } from "@iconify/react";
import "../Icons/Book.css";

export const Book = ({ isState }) => {
  return (
    <>
      <div className={isState ? "book-highlighted" : "default"}>
        <Icon icon="heroicons:book-open-solid" height="26px" />
      </div>
    </>
  );
};
