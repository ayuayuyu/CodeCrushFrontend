import { Logo } from "./Logo";
import { MenuList } from "./MenuList";

export const Header = () => {
  return (
    <div
      style={{
        top: "20px",
        position: "fixed",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        padding: "0px 20px",
        boxSizing: "border-box",
      }}
    >
      <Logo />
      <MenuList />
    </div>
  );
};
