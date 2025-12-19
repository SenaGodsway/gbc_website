import { FaFacebook } from "react-icons/fa"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Input, TextArea } from "../components/reuseables/input"
import { BsInstagram, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs"
import { RoundButton } from "../components/reuseables/button"
// import Input from "../components/reuseables/input"


const Contact = () => {
  return (
    <>
    <div className="bg-blue-800">
            <Navbar/>
            </div>
        <div className="p-12 text-center">
            <h1>Contact Us</h1>
        </div>
        <div className="flex mb-9">
            <div className="flex flex-col gap-6 pl-24 w-2/5">
            <span>
            {/* <h2 className="mb-3 text-2xl">Address</h2> */}
            <p>Westland Junction</p>
            <p>Kwakai-Ashi Street</p>
            <p>GE-349-7628</p>
            </span>

        <div>
        {/* <h2 className="mb-3 text-2xl">Contact </h2> */}
            <span className="">
                <p>gracebaptistchurch@gmail.com</p>
                <p>(+233) 5420245819</p>
                <p>(+233) 249788405</p>
            </span>
        </div>
        <div>
            {/* <h2 className="text-2xl">Connect with us</h2> */}
           <span className="flex gap-6 mt-3 text-2xl">
            <FaFacebook/>
            <BsInstagram/>
            <BsTwitter/>
            <BsYoutube/>
            <BsWhatsapp/>
           </span>
        </div>
            </div>
            <div className="w-3/6">
               <div className="mx-auto p-6 w-4/5">
               <form action=""
                className="flex flex-col gap-6"
                >
                    <div>
                    <label htmlFor="">Email</label>
                        <Input placeholder="Enter your email"/>
                    </div>
                    <div>
                        <label htmlFor="">Message</label>
                        <TextArea placeholder="Write your message"/>
                    </div>
                    <div className="w-2/4">
                        <RoundButton>Send Message</RoundButton>
                    </div>
                </form>
               </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Contact