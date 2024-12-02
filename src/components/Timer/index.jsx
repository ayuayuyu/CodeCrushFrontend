import { useCallback, useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

export const Timer = ({ initialTime, setIsFinish }) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + initialTime);
  const [countTime, setCountTime] = useState("timerHigh");

  const { seconds, minutes, isRunning, start } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
    autoStart: false,
  });

  const updateCountTime = useCallback(() => {
    if (minutes < 1 && seconds < 20) {
      setCountTime("timerLow");
    } else if (minutes < 1) {
      setCountTime("timerMedium");
    } else {
      setCountTime("timerHigh");
    }
    if (minutes <= 0 && seconds <= 0) {
      setIsFinish(1);
    }
  }, [minutes, seconds, setIsFinish]);

  useEffect(() => {
    updateCountTime();
  }, [updateCountTime]);

  const timerStyles = {
    timerHigh: {
      backgroundColor: "#E8FDE7",
      color: "#2ADA6E",
      border: "3px solid #2ADA6E",
    },
    timerMedium: {
      backgroundColor: "#FFF6D6",
      color: "#FFC80B",
      border: "3px solid #FFC80B",
    },
    timerLow: {
      backgroundColor: "#FFE3E3",
      color: "#E54671",
      border: "3px solid #E54671",
    },
  };

  return (
    <div>
      <div>{isRunning ? "running" : "Not running"}</div>
      <div
        style={{
          ...timerStyles[countTime],
          borderRadius: "30px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontSize: "42px",
          fontWeight: "bold",
          flexGrow: "1",
        }}
      >
        <div>
          <span style={{ fontSize: "14px" }}>残り時間</span>
          <span>{minutes}</span>:
          <span>{seconds < 10 ? "0" + seconds : "" + seconds}</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <button onClick={start}>start</button>
      </div>
    </div>
  );
};
