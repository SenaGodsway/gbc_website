import { useState, useEffect, useRef } from 'react';

const ImageCarousel = ({ images, speed = 50 }) => {
  const [translateY, setTranslateY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateY((prevTranslateY) => {
        const newTranslateY = prevTranslateY - 1;
        if (Math.abs(newTranslateY) >= containerRef.current.scrollHeight / 2) {
          return 0;
        }
        return newTranslateY;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="absolute flex flex-col w-full"
        ref={containerRef}
        style={{ transform: `translateY(${translateY}px)` }}
      >
        {[...images, ...images].map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-[500px]">
            <img
              src={image}
              alt={`carousel-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
