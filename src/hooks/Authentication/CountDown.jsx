import React, { useState, useEffect } from "react";

const CountDown = () => {
  const [count, setCount] = useState(90);

  useEffect(() => {
    if (count <= 0) return;

    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  const formatTime = (count) => {
    const minutes = Math.floor(count / 60);
    const seconds = count % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const setTime = () => {
    if (count === 0) {
      return setCount(90);
    }
  };

  return {
    count,
    formatTime,
    setTime,
  };
};

export default CountDown;
