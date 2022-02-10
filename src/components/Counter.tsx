import React from "react";
import Countdown, { zeroPad } from "react-countdown";

const CounterProps = {
  date: Date,
};

const Counter = ({ date }) => {
  let eventDate = date;

  const renderer = ({ days, hours, minutes, seconds }) => {
    let timeDay = "Dias";
    let timeHour = "Horas";
    let timeMinutes = "Minutos";
    let timeSeconds = "Segundos";

    return (
      <div className="font-medium text-primary">
        <div className="flex gap-8">
          <div className="flex flex-col items-center w-24">
            <p className="text-xl lg:text-7xl">{zeroPad(days)}</p>{" "}
            <p className="text-xs font-thin">{timeDay}</p>
          </div>
          <div className="flex flex-col items-center w-24">
            <p className="text-xl lg:text-7xl">{zeroPad(hours)}</p>
            <p className="text-xs font-thin">{timeHour}</p>
          </div>
          <div className="flex flex-col items-center w-24 ">
            <p className="text-xl lg:text-7xl">{zeroPad(minutes)}</p>
            <p className="text-xs font-thin">{timeMinutes}</p>
          </div>
          <div className="flex flex-col items-center w-24">
            <p className="text-xl lg:text-7xl">{zeroPad(seconds)}</p>
            <p className="text-xs font-thin">{timeSeconds}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="grid ">
        {/* <p>la clase comienza en</p> */}
        <Countdown
          date={eventDate}
          renderer={renderer}
          zeroPadTime={2}
          zeroPadDays={2}
        />
      </div>
    </>
  );
};

export default Counter;
