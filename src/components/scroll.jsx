import { useEffect, useRef } from 'react';

import eight from '../assets/eight.jpg'
import nine from '../assets/nine.jpg'
import ten from '../assets/ten.jpg'
import seven from '../assets/seven.jpg'
import six from '../assets/six.jpg'


const ScrollGallery = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      // Get the element's position relative to the viewport
      const rect = scrollContainerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far through the section we've scrolled (0 to 1)
      const progressThroughViewport = 1 - (rect.bottom / (viewportHeight + rect.height));
      
      // Only animate when the element is in view
      if (progressThroughViewport >= 0 && progressThroughViewport <= 1) {
        // Calculate the scroll position based on the total scrollable width
        const scrollableWidth = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
        const scrollPosition = scrollableWidth * progressThroughViewport;
        
        // Smooth scroll to the calculated position
        scrollContainerRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      title: 'Men Ministry',
      image: nine,
    },
    {
      title: 'Women Ministry',
      image: ten,
    },
    {
      title: 'Youth Ministry',
      image: eight,
    },
    {
      title: 'Children Ministry',
      image: seven,
    },
    {
      title: 'Other Ministries',
      image: six,
    },
  ];

  return (
    <div className="flex items-center py-8 w-full object-contain">
      <div className="mx-auto px-4 container">
        {/* Horizontal scroll container */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex md:flex-row flex-col gap-4 pb-8 overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: 'none' }} // Disable snap scrolling for smooth animation
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-none w-[350px] cursor-pointer group"
              >
                {/* Card */}
                <div className="bg-gray-100 group-hover:shadow-lg rounded-lg transition-all duration-300 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="group-hover:scale-105 w-full h-full transition-transform duration-300 object-cover"
                    />
                  </div>
                  {/* Title */}
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 text-lg">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add custom styles to hide the scrollbar while maintaining functionality
const style = document.createElement('style');
style.textContent = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);

export default ScrollGallery;