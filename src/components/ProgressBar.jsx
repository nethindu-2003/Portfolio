import React, { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setWidth(progress);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to capture initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="progress" aria-hidden="true">
      <div className="progress__bar" style={{ width: `${width}%` }}></div>
    </div>
  );
}
