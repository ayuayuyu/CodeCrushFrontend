import { Timer } from "../../components/Timer";

export const Title = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 62);
  return (
    <>
      <Timer expiryTimestamp={time} />
      <p>Title</p>
    </>
  );
};
