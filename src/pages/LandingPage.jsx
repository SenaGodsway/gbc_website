
import eight from '../assets/eight.jpg'
import nine from '../assets/nine.jpg'
import ten from '../assets/ten.jpg'
import Footer from "../components/Footer";
import { RoundButton } from "../components/reuseables/button";
import { FaArrowRightLong,} from "react-icons/fa6";

import { Link } from "react-router-dom";
import ScrollGallery from "../components/scroll";
import HeroSection from "../components/hero";
import Navbar from "../components/Navbar";


const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <div className="relative flex h-[85vh] md:h-[80vh]">
      <div className="md:relative right-0 absolute bg-black bg-opacity-10 md:bg-opacity-100 w-full md:w-5/12">
          <div className="mx-auto mt-[35%] p-6 w-full md:w-11/12 text-white">
            <h1 className="mb-6 font-bold text-3xl">Welcome to Our Community of Faith</h1>
            <p className="w-3/4 text-lg">Join us as we worship, grow, and serve together in Christ. We&apos;re excited to welcome you into a community where God&apos;s love shines</p>
          </div>
      </div>
      <div className="-z-10 w-full md:w-7/12">
        <HeroSection/>
      </div>
    </div>
  
    <section className="flex md:flex-row flex-col py-12 h-[90vh]">
        <div className="px-6 md:px-16 py-6 md:py-14 w-full md:w-2/4 lg:w-2/4">
        <h2 className="mt-11 mb-3 font-bold text-[2rem] text-2xl">The Church</h2>
        <p className="mt-6 text-gray-700 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rerum consequuntur cupiditate eum aut nostrum quia, animi architecto. Distinctio veniam ipsam libero quam ipsa accusamus sint nostrum asperiores a itaque.</p>
        <div className="mt-6"></div>
        <RoundButton href='/about_us'>
            <p>Read More</p>
            <span><FaArrowRightLong/></span>
        </RoundButton>
        </div>
        <div className="p-6 md:p-12 w-full md:w-2/4 h-full">
        {/* <ImageCarousel images={images} speed={20} />         */}
        </div>
    </section>
    
    <div className="flex md:flex-row flex-col justify-between gap-10 bg-blue-950 px-6 py-24">
      <div className="p-6 w-full md:w-[40%] text-white">
          <h1 className="mb-3 text-2xl">Our Service Times</h1>
          <p className="w-full md:w-[90%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quisquam tempore? Minima.</p>
      </div>
      <div className="flex flex-col gap-3 w-[100%] md:w-[60%]">
        <span className="bg-blue-900 mb-3 p-4 rounded-lg lg:w-5/6 text-white">
          <h1>Sunday Service</h1>
          <p>Sundays, 8:30am - 11:30pm</p>
        </span>
        <span className="bg-blue-900 mb-3 p-4 rounded-lg lg:w-5/6 text-white">
          <h1>Wednesday Prayer Meeting</h1>
          <p>Wednesdays, 6:30am - 8:30pm</p>
        </span>
        <span className="bg-blue-900 mb-3 p-4 rounded-lg lg:w-5/6 text-white">
          <h1>Youth Meeting</h1>
          <p>Fridays, 8:30am - 9:30pm</p>
        </span>
        <span className="bg-blue-900 mb-3 p-4 rounded-lg lg:w-5/6 text-white">
          <h1>AWANA Meeting</h1>
          <p>Fridays, 8:30am - 9:30pm</p>
        </span>
        <span className="flex md:flex-row flex-col justify-between items-center gap-3 bg-blue-900 mb-3 p-4 rounded-lg lg:w-5/6 text-white" >
          <span>
              <h1>Cell Meeting</h1>
              <p>Sundays, 3:00pm - 6:00pm</p>
          </span>
          <span><RoundButton>Find your cell area</RoundButton></span>
        </span>
      </div>
    </div>
    <div className="mt-6 py-12">
      <h1 className="font-bold text-2xl text-center">Our Ministries and Groups</h1>
    <ScrollGallery/>
    </div>

    <div className="bg-blue-950 py-32 text-white">
        <div className="text-center">
            <h1 className="font-bold text-2xl"> Recent Sermons</h1>
            <Link 
            className=""
            to='/'>View All</Link>
        </div>
        <div className="flex md:flex-row flex-col mx-auto mt-16 p-3 w-[100%] md:w-[80%]">
            <div className="mb-6 w-full md:w-1/3">
                <h1 className="mb-3 font-bold text-3xl">The Power of the communion</h1>
                <p>Sunday, 23 October, 2024</p>
                <a href="/">Read More</a>
            </div>
            <div className="mb-6 sm:w-full lg:w-1/3">
                <h1 className="mb-3 font-bold text-3xl">The Power of the communion</h1>
                <p>Sunday, 23 October, 2024</p>
                <a href="/">Read More</a>
            </div>
            <div className="mb-6 sm:w-full lg:w-1/3">
                <h1 className="mb-3 font-bold text-3xl">The Power of the communion</h1>
                <p>Sunday, 23 October, 2024</p>
                <a href="/">Read More</a>
            </div>
        </div>

    </div>
    <section className="py-32">
        <div className="mb-8 text-center">
            <h1 className="font-bold text-2xl">Programs and Events</h1>
           <Link to='/'>View All</Link>
        </div>
        <div className="flex md:flex-row flex-col gap-6 mx-auto w-full md:w-[90%]">
            <div className="hover:bg-slate-100 p-6 w-full cursor-pointer">
                <img src={eight} alt="" />
                <span className="flex flex-col gap-1 pt-3 font-bold">
                    <h2 className="text-orange-400 text-sm">21 October, 2024</h2>
                    <h1 className="text-[1.3rem]">Family Week Celebration</h1>
                </span>
            </div>
            <div className="hover:bg-slate-100 p-6 w-full cursor-pointer">
                <img src={ten} alt="" />
                <span className="flex flex-col gap-1 pt-3 font-bold">
                    <h2 className="text-orange-400 text-sm">14 October, 2024</h2>
                    <h1 className="text-[1.3rem]">Youth Week Celebration</h1>
                </span>
            </div>
            <div className="hover:bg-slate-100 p-6 w-full cursor-pointer">
                <img src={nine} alt="" />
                <span className="flex flex-col gap-1 pt-3 font-bold">
                    <h2 className="text-orange-400 text-sm">14 October, 2024</h2>
                    <h1 className="text-[1.3rem]">Youth Week Celebration</h1>
                </span>
            </div>
        </div>
    </section>
    <div>
        <div className="mx-auto py-32 w-full md:w-[90%]">
            <div className="p-6 text-center">
                <h1 className="font-bold text-3xl">We&apos;d love to hear from you</h1>
                <p>It is our ultmate pleasure to Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                <span className="flex md:flex-row flex-col justify-center items-center gap-6 m-6">
                  <RoundButton>Contact us</RoundButton>
                  <RoundButton>Plan your next visit</RoundButton>
                </span>
            </div>
            {/* <div>picture here</div> */}
        </div>
    </div>

    <Footer/>

    </>
  )
}

export default LandingPage;