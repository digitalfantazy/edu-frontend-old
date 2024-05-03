import { useState, useEffect } from "react";

const useTimer = (initialTime) => {

  const getInitialTime = () => {
    const expirationTime = localStorage.getItem("expirationTime");
    if (expirationTime) {
      const currentTime = new Date().getTime();
      const timeLeft = Math.ceil((expirationTime - currentTime) / 1000);
      return timeLeft > 0 ? timeLeft : 0;
    }
    return initialTime;
  };

  const [timeLeft, setTimeLeft] = useState(getInitialTime);

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      const currentTime = new Date().getTime();
      const expirationTime = currentTime + timeLeft * 1000;
      localStorage.setItem("expirationTime", expirationTime.toString());
    }

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const resetTimer = () => {
    setTimeLeft(initialTime); // Сброс таймера до начального времени
    const currentTime = new Date().getTime();
    const expirationTime = currentTime + initialTime * 1000; // Установка нового времени истечения
    localStorage.setItem("expirationTime", expirationTime.toString());
  };

  return { timeLeft, resetTimer };
};

export default useTimer;
