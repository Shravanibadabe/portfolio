import React, { useEffect, useState } from "react";

function Counter({ title, end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(end / 100);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, 20);
  }, [end]);

  return (
    <div className="counter">
      <h3>{count}</h3>
      <p>{title}</p>
    </div>
  );
}

function Counters() {
  return (
    <section className="counters">
      <Counter title="Projects" end={3} />
      <Counter title="GitHub Repos" end={3} />
      
    </section>
  );
}

export default Counters;