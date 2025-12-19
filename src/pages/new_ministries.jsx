/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import eight from '../assets/eight.jpg';
import nine from '../assets/nine.jpg';
import ten from '../assets/ten.jpg';
import seven from '../assets/seven.jpg';
import six from '../assets/six.jpg';

const NewMinistries = () => {
  const containerRef = useRef(null);
  const staticRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const staticElement = staticRef.current;
    const gridElement = gridRef.current;

    if (!container || !staticElement || !gridElement) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const staticRect = staticElement.getBoundingClientRect();

      // When container enters viewport but hasn't completely scrolled past
      if (containerRect.top <= 100 && containerRect.bottom >= window.innerHeight) {
        // Make static content stick to its original position visually
        staticElement.style.position = 'sticky';
        staticElement.style.top = '50px';
        staticElement.style.alignSelf = 'flex-start';
      } else {
        // Reset when out of view
        staticElement.style.position = '';
        staticElement.style.top = '';
        staticElement.style.alignSelf = '';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Ministry = ({ title, description, ministryUrl, ministryImage }) => {
    return (
      <div 
        className="group relative flex-1 shadow-md p-5 rounded-2xl md:min-w-[250px] min-w-11/12 sm:min-w-11/12 overflow-hidden"
        style={{
          backgroundImage: `url(${ministryImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-all duration-300"></div>
        
        {/* Content */}
        <div className="z-10 relative flex items-end h-full text-white">
          <div>
            <div>
              <h3 className="mb-2 font-semibold text-xl">{title}</h3>
              <p className="mb-4">{description}</p>
            </div>
            <span className="inline-block bg-white hover:bg-gray-100 px-3 py-1 rounded-md font-bold text-gray-800 text-sm transition-colors">
              <Link to={ministryUrl}>Read More</Link>
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div 
      ref={containerRef}
      className="relative flex flex-col md:flex-row gap-12 mx-auto mt-24 p-6 md:p-12 w-full"
    >
      <div 
        ref={staticRef}
        id="static" 
        className="w-full md:w-3/12 transition-all duration-300"
      >
        <h1 className="mb-2 font-bold text-gray-900 text-3xl">Our Ministries</h1>
        <p className="mb-8 text-gray-600 leading-relaxed">
          Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups.
        </p>
      </div>
      <div 
        ref={gridRef}
        className="gap-10 grid md:grid-cols-2 grid-cols-1 mb-10 md:w-8/12 w-full bg-white"
      >
        <Ministry
          title="Men Ministry"
          description="That have access to bank credit and are satisfied with the current product."
          ministryUrl="/men_ministry"
          ministryImage={eight}
        />
        <Ministry
          title="Women Ministry"
          description="that have access to bank credit and are not satisfied with the current service."
          ministryUrl="/women_ministry"
          ministryImage={nine}
        />
        <Ministry
          title="Youth and Children Ministry"
          description="that have access to bank credit and are not satisfied with the current service."
          ministryUrl="/youth_ministry"
          ministryImage={seven}
        />
        <Ministry
          title="Other Ministries"
          description="from near-crime engine, prime segments with no access to bank credit."
          ministryUrl="/other_ministries"
          ministryImage={six}
        />
      </div>
    </div>
  );
};

export default NewMinistries;

// /* eslint-disable react/prop-types */

// import { Link } from "react-router-dom";
// import eight from '../assets/eight.jpg';
// import nine from '../assets/nine.jpg';
// import ten from '../assets/ten.jpg';
// import seven from '../assets/seven.jpg';
// import six from '../assets/six.jpg';

// const NewMinistries = () => {
//   // Segment component
//   const Ministry = ({ title, description, ministryUrl, ministryImage }) => {
//     return (
//       <div 
//         className="group relative flex-1 shadow-md p-5 rounded-2xl min-w-[250px] overflow-hidden"
//         style={{
//           backgroundImage: `url(${ministryImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '400px'
//         }}
//       >
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
        
//         {/* Content */}
//         <div className="z-10 relative flex items-end h-full text-white">
//          <div>
//          <div>
//             <h3 className="mb-2 font-semibold text-xl">{title}</h3>
//             <p className="mb-4">{description}</p>
//           </div>
//           <span className="inline-block bg-white hover:bg-gray-100 px-3 py-1 rounded-md font-bold text-gray-800 text-sm transition-colors">
//             <Link to={ministryUrl}>Read More</Link>
//           </span>
//          </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="flex gap-12 mx-auto mt-24 p-12 w-full">
//       <div className="w-3/12" id="static">
//         <h1 className="mb-2 font-bold text-gray-900 text-3xl">Our Ministries</h1>
//         <p className="mb-8 text-gray-600 leading-relaxed">
//           Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups.
//         </p>
//       </div>
//       <div className="gap-10 grid grid-cols-2 mb-10 w-8/12">
//         <Ministry
//           title="Men Ministry"
//           description="That have access to bank credit and are satisfied with the current product."
//           ministryUrl="/men"
//           ministryImage={eight}
//         />
        
//         <Ministry
//           title="Women Ministry"
//           description="that have access to bank credit and are not satisfied with the current service."
//           ministryUrl="/women"
//           ministryImage={nine}
//         />
        
//         <Ministry
//           title="Youth and Children Ministry"
//           description="that have access to bank credit and are not satisfied with the current service."
//           ministryUrl="/youth"
//           ministryImage={seven}
//         />
        
//         <Ministry
//           title="Other Ministries"
//           description="from near-crime engine, prime segments with no access to bank credit."
//           ministryUrl="/others"
//           ministryImage={six}
//         />
//       </div>
//     </div>
//   );
// };

// export default NewMinistries;
