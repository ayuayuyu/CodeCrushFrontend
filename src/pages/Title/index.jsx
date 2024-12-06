import { Logo } from "../../components/Logo";
import { MenuList } from "../../components/MenuList";

export const Title = () => {
  return (
    <>
      <p>Title</p>
      <div style={{ display: "flex", gap: 20 }}>
        <Logo />
        <MenuList />
      </div>
    </>
  );
};
