"use client";
import React from "react";
import { useState, useEffect } from "react";

const Timer = (props: any) => {
  const { initialMinute = 18, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      {minutes === 0 && seconds === 0 ? null : (
        <h1
          className={"text-slate-300 text-4xl font-semibold pl-2 py-4 border-b"}
        >
          Time left :
          <span className={"ml-2 text-yellow-500"}>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </h1>
      )}
    </div>
  );
};

export default Timer;
