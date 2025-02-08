import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
const Sermons = () => {
  return (
    <>
    <div className="bg-slate-900 text-black">
        <Navbar/>
    </div>
    <div className="mt-24 text-center">
        <h1 className="mb-3 font-bold text-2xl">Our Sermons</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, voluptatem pariatur?</p>
    </div>

        <div className="gap-10 grid grid-cols-3 mx-auto mt-16 mb-24 w-[90%]" >
            <div className="w-full">
                <h1 className="mb-1 font-bold text-2xl">The Power of the communion</h1>
                <p>Sunday, 23 October, 2024</p>
                <a href="/">Read More</a>
            </div>
            <div className="w-full">
                <h1 className="mb-1 font-bold text-2xl">The Power of the communion</h1>
                <p>Sunday, 23 October, 2024</p>
                <a href="/">Read More</a>
            </div>
            <div className="w-full">
                <h1 className="mb-1 font-bold text-2xl">The Power of the communion</h1>
                <p>Sunday, 23 October, 2024</p>
                <a href="/">Read More</a>
            </div>
            <div className="w-full">
                <h1 className="mb-1 font-bold text-2xl">The Power of the communion</h1>
                <p>Sunday, 23 October, 2024</p>
                <a href="/">Read More</a>
            </div>
            <div className="w-full">
                <h1 className="mb-1 font-bold text-2xl">The Power of the communion</h1>
                <p>Sunday, 23 October, 2024</p>
                <a href="/">Read More</a>
            </div>
        </div>

    <Footer/>
    </>
  )
}

export default Sermons