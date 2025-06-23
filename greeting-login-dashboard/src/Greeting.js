import React, { useEffect, useState } from 'react';

const Greeting = ({ next }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return 'Good Morning!';
    if (hour < 18) return 'Good Afternoon!';
    return 'Good Evening!';
  };

  return (
    <div className="greeting">
      <h1>{getGreeting()}</h1>
      <p>Welcome to our dashboard! Click below to login.</p>
      <button onClick={next}>Login</button>
    </div>
  );
};

export default Greeting;
