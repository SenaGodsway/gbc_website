import  { useState, useEffect } from 'react';
import eightImage from '../assets/eight.jpg';
import fiveImage from '../assets/nine.jpg';
import oneImage from '../assets/ten.jpg';



const ImageCarousel = () => {

  const images = [
    { src: eightImage, alt: 'Image 1' },
    { src: fiveImage, alt: 'Image 2' },
    { src: oneImage, alt: 'Image 3' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to set the image based on the clicked dot
  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="relative mx-auto w-full h-full overflow-hidden">
      {/* Image */}
      <div className="w-full h-full overflow-hidden">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
        />
      </div>

   

      {/* Dots for navigation */}
      {/* <div className="bottom-2 left-1/2 absolute flex space-x-2 transform -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default ImageCarousel;
