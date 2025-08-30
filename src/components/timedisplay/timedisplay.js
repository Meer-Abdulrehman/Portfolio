import { useState, useEffect } from "react";

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();   // 0-23
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";  // 0-11 AM, 12-23 PM

    hours = hours % 12;
    if (hours === 0) hours = 12; // midnight/noon case fix

    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  };

  return (
    <div className="time-display">
      <span className="time-display__time">{formatTime(currentTime)}</span>
    </div>
  );
};

export default TimeDisplay;
