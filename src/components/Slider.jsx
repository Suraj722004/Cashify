import React, { useState, useEffect } from 'react';

const Slider = () => {
  const images = [
    'https://s3no.cashify.in/cashify/web/0b7b3057c64e4163bc60fceb83d095e0.webp?p=default&s=lg',
    'https://s3no.cashify.in/cashify/web/753432b9b22448d4950ce1d2f843d2a0.webp?p=default&s=lg',
    'https://s3no.cashify.in/cashify/web/161bced912c640d1884a8479d199d45d.webp?p=default&s=lg',
    'https://s3no.cashify.in/cashify/web/f8e21ba5d06f4d32a4348f160dff171b.webp?p=default&s=lg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden relative">
     
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full object-cover"
          />
        ))}
      </div>

      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-green-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
