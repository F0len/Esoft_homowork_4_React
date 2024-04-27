import { useState, useEffect } from 'react';
import '../componentsStyle/timer.css'

const interval_ms = 1000;
const seconds = 10;

const CountdownTimer = () => {
  const [timer, setTimer] = useState(seconds);


  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        
        if (prevTimer === 0) {
          clearInterval(interval);

          return prevTimer;
        }

        return prevTimer-1;
      });
    }, interval_ms);
  
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="countdown-container">
      {timer > 0 ? (
        <p className="timer-text">Осталось времени: {timer}</p>
      ) : (
        <p  className="timer-text">Время вышло!</p>
      )}
    </div>
  );
};

export default CountdownTimer;