import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false); 

  return (
    <>
      <nav className="z-50 flex justify-between bg-white px-12 py-6 border-b w-full text-slate-900 transition-all duration-300">
        <div className="font-bold text-xl">
          <Link to="/">Grace Baptist Church</Link>
        </div>
        
   
        <div className="md:flex lg:flex gap-6 hidden">
          <Link to="/about_us">About Us</Link>
          <span
            className="cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)} 
          >
            Ministries
          </span>
          <Link to="/sermons">Sermons</Link>
          <Link to="/events">Events</Link>
          <Link to="/give">Give</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Dropdown for Ministries */}
        {showDropdown && (
          <div className="top-[50px] right-[19%] z-50 absolute bg-white px-12 py-6 text-black">
            <Link to="/men_ministry">Men Ministry</Link>
            <br />
            <Link to="/women_ministry">Women Ministry</Link>
            <br />
            <Link to="/youth_ministry">Youth Ministry</Link>
            <br />
            <Link to="/children_ministry">Children Ministry</Link>
            <br />
            <Link to="/">Other Ministries</Link>
          </div>
        )}

        {/* Mobile Menu Icon */}
        <button
          className="block md:hidden text-lg"
          onClick={() => setShowMenu(!showMenu)} // Toggle mobile menu visibility
        >
          <BiMenu />
        </button>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="top-16 right-0 z-50 absolute md:hidden bg-red-700 p-6 w-full h-[90vh] text-black">
            <Link to="/about_us" className="block py-2">About Us</Link>
            <span
              className="block py-2 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Ministries
            </span>
            {showDropdown && (
              <div className="pl-4">
                <Link to="/men_ministry" className="block py-2">Men Ministry</Link>
                <Link to="/women_ministry" className="block py-2">Women Ministry</Link>
                <Link to="/youth_ministry" className="block py-2">Youth Ministry</Link>
                <Link to="/children_ministry" className="block py-2">Children Ministry</Link>
                <Link to="/" className="block py-2">Other Ministries</Link>
              </div>
            )}
            <Link to="/sermons" className="block py-2">Sermons</Link>
            <Link to="/events" className="block py-2">Events</Link>
            <Link to="/give" className="block py-2">Give</Link>
            <Link to="/contact" className="block py-2">Contact Us</Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
