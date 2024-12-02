import React, { useState, useEffect } from 'react';
import { LEVELS_TIME } from '../../../constants';
import { formatTime } from '../../../helpers';
import './Timer.scss';

const Timer = ({ level, isRunning, endGameModal, setEndTime }) => {
  const [time, setTime] = useState(LEVELS_TIME[level]);

  useEffect(() => {
    let intervalId;

    if (isRunning && time > 0) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(intervalId);
      endGameModal(false);
    };

    if(!isRunning) setEndTime(time);
    
    return () => clearInterval(intervalId);  
  }, [isRunning, time, endGameModal, setEndTime]);

  return (
    <div className='timer-container'>
      <div className="timer">
        {formatTime(time)}
      </div>
    </div>
  );
};

export default Timer;