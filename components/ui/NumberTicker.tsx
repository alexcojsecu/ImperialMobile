import React from 'react';
import CountUp from 'react-countup';

interface NumberTickerProps {
  end: number;
  duration?: number;
  className?: string;
}

const NumberTicker = ({ end, duration = 2, className }: NumberTickerProps) => {
  return (
    <div className={className}>
      <CountUp end={end} duration={duration} />
    </div>
  );
};

export default NumberTicker;