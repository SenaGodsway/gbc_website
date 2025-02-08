import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'
import five from '../assets/five.jpg'
import six from '../assets/six.jpg'
const Events = () => {
  return (
    <>
    <div className="bg-slate-900 text-black">
        <Navbar/>
    </div>
    <div className="mt-24 text-center">
        <h1 className="mb-3 font-bold text-2xl">Upcomming events</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, voluptatem pariatur?</p>
    </div>
    <div className="gap-6 grid grid-cols-3 mx-auto my-24 w-[90%]">
            <div className="hover:bg-slate-100 p-6 w-full cursor-pointer">
                <img src={two} alt="" className="w-full h-[250px]" />
                <span className="flex flex-col gap-1 pt-3 font-bold">
                    <h2 className="text-orange-400 text-sm">21 October, 2024</h2>
                    <h1 className="text-[1.3rem]">Family Week Celebration</h1>
                </span>
            </div>
            <div className="hover:bg-slate-100 p-6 w-full cursor-pointer">
                <img src={two} alt="" className="w-full h-[250px]" />
                <span className="flex flex-col gap-1 pt-3 font-bold">
                    <h2 className="text-orange-400 text-sm">14 October, 2024</h2>
                    <h1 className="text-[1.3rem]">Youth Week Celebration</h1>
                </span>
            </div>
            <div className="hover:bg-slate-100 p-6 w-full cursor-pointer">
                <img src={two} alt="" className="w-full h-[250px]" />
                <span className="flex flex-col gap-1 pt-3 font-bold">
                    <h2 className="text-orange-400 text-sm">14 October, 2024</h2>
                    <h1 className="text-[1.3rem]">Youth Week Celebration</h1>
                </span>
            </div>
            <div className="hover:bg-slate-100 p-6 w-full cursor-pointer">
                <img src={two} alt="" className="w-full h-[250px]" />
                <span className="flex flex-col gap-1 pt-3 font-bold">
                    <h2 className="text-orange-400 text-sm">14 October, 2024</h2>
                    <h1 className="text-[1.3rem]">Youth Week Celebration</h1>
                </span>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Events