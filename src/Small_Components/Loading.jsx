import React, { useState, useEffect } from 'react';
import './Loading.css'; // Ensure you have CSS for styling

// Example icons
const icons = [
//   '/load1.png', // replace with actual paths or URLs
'/load4.png',
'/load2.png',
'/load4.png',
  '/load3.png'
];

const Loading = () => {
  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIcon((prevIcon) => (prevIcon + 1) % icons.length);
    }, 700); // Change icon every 500 milliseconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="loading-container">
      <img src={icons[currentIcon]} alt="Loading Icon" className="loading-icon" />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;