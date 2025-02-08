import { BsInstagram, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-black px-12 py-16 text-white">
       <div className="flex justify-center gap-6 px-12">
        {/* <a href='#'>Home</a> */}
        <Link to='/about_us'>About Us</Link>
        <Link to='/sermons'>Sermons</Link>
        <Link to='/events'>Events</Link>
        <Link to='/give'>Give</Link>
        <Link to='/contact'>Contact us</Link>
        </div>
        <div className="flex justify-center gap-6 mt-3 px-6">
        <Link to="/men_ministry">Men Ministry</Link>
        <Link to="/women_ministry">Women Ministry</Link>
        <a href='#'>Youth Ministry</a>
        <a href='#'>Children Ministry</a>
        <a href='#'>Other Ministry </a>
        </div>
    <div className="flex md:flex-row flex-col justify-between mx-auto mt-[80px] w-[80%] text-white" >
       <span>
            <h2 className="mb-3 text-2xl">Address</h2>
            <p>Westland Junction</p>
            <p>Kwakai-Ashi Street</p>
            <p>GE-349-7628</p>
            </span>

        <div>
        <h2 className="mb-3 text-2xl">Contact </h2>
            <span className="">
                <p>gracebaptistchurch@gmail.com</p>
                <p>(+233) 5420245819</p>
                <p>(+233) 249788405</p>
            </span>
        </div>
        <div>
            <h2 className="text-2xl">Connect with us</h2>
           <span className="flex gap-6 mt-3 text-2xl">
            <FaFacebook/>
            <BsInstagram/>
            <BsTwitter/>
            <BsYoutube/>
            <BsWhatsapp/>
           </span>
        </div>
    </div>
    <div className="mt-6 p-6 text-center text-white">
      <p>All rights reserved @2024</p>
    </div>
    </footer>
  )
}

export default Footer