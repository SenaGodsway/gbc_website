import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { RoundButton } from "../components/reuseables/button"
import { CiMoneyBill } from "react-icons/ci"

const Give = () => {
  return (
    <>
    <div className="bg-blue-800">
      <Navbar/> 
      </div>
      <div className="bg-[url('./assets/four.jpg')] bg-cover bg-center h-[80vh]">
          <div className="bg-[rgba(20,20,200,.2)] h-full">
            <div className="mx-auto w-[90%] text-center text-white">
              <h1 className="font-bold text-3xl">Give</h1>
            </div>
          </div>
      </div>

          <div className="mx-auto my-24 w-[80%]">
            <h1 className="mb-6 font-bold text-2xl text-center">Why Give</h1>
            <p className="w-full text-gray-700 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem exercitationem obcaecati, sed dignissimos in reprehenderit, harum dolores quisquam magni nemo sunt praesentium iste omnis alias ratione nostrum quod laudantium. Tenetur!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nulla et earum quisquam ex laborum beatae, rem sequi at quia? Sit odit quidem dicta voluptatem repellat amet quibusdam sunt eius. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati tenetur vitae consequuntur hic odio eius corporis ratione autem necessitatibus maiores, praesentium, voluptatibus inventore fuga perferendis, facilis veniam officia voluptas voluptatum.</p>
          </div>

          <div className="mx-auto my-12 w-[80%]">
            <h1 className="font-bold text-2xl text-center">How To Give</h1>
            <p className="w-full text-gray-700 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem exercitationem obcaecati, sed dignissimos in reprehenderit, harum dolores quisquam magni nemo sunt praesentium iste omnis alias ratione nostrum quod laudantium. Tenetur!
              Lorem ipsum dolor sit amet, consectetur adipi sicing elit. Optio nulla et earum quisquam ex laborum beatae, rem sequi at quia? Sit odit quidem dicta voluptatem repellat amet quibusdam sunt eius. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati tenetur vitae consequuntur hic odio eius corporis ratione autem necessitatibus maiores, praesentium, voluptatibus inventore fuga perferendis, facilis veniam officia voluptas voluptatum.</p>
          </div>
          <div className="p-12 text-center">
            <RoundButton>
              <p>Click here to give</p>
              <CiMoneyBill/>
              </RoundButton>
          </div>
      <Footer/>
    </>
  )
}

export default Give