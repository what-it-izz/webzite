import React, { useEffect, useRef } from 'react';
import './LavaLampBackground.css';

const LavaLampBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const colors = ['#caf0f8', '#90e0ef', '#00b4d8', '#0077b6']; // Replace with your desired colors

    const updateBackgroundColor = () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      containerRef.current.style.backgroundColor = randomColor;
    };

    const intervalId = setInterval(updateBackgroundColor, 2000); // Change the duration as needed

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className="lava-lamp-background" ref={containerRef}></div>;
};

export default LavaLampBackground;
