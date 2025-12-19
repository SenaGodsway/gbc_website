import  { useState, useEffect } from 'react';
import eightImage from '../assets/eight.jpg';
import fiveImage from '../assets/nine.jpg';
import oneImage from '../assets/ten.jpg';
import Navbar from './Navbar';



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
    <div className="relative w-full h-[90vh] overflow-hidden">
      <div className="w-full h-full overflow-hidden">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
        />
          
      </div>
      <div className="top-0 absolute flex flex-col justify-between bg-black bg-opacity-10 w-full h-full">
        <Navbar/>
            <div className="flex flex-col justify-around p-3 align-center">
               <div className="p-6 w-full md:w-8/12 text-white">
              <h1 className="mb-6 font-bold text-3xl">Welcome to Our Community of Faith</h1>
             <p className="w-3/4 text-lg">Join us as we worship, grow, and serve together in Christ. We&apos;re excited to welcome you into a community where God&apos;s love shines</p>
          </div>
         <div className='mt-12'></div>

         </div>
      </div>
   
    </div>
  );
};

export default ImageCarousel;

