import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Mimics the original window load preloader fade out with a 400ms delay
    const timer = setTimeout(() => {
      setHidden(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${hidden ? 'hidden' : ''}`} id="preloader">
      <div className="preloader__inner">
        <div className="preloader__dot"></div>
        <p>Loading</p>
      </div>
    </div>
  );
}
