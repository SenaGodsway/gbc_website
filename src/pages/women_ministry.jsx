import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ScrollGallery from "../components/scroll"

const WomenMinistry = () => {
  return (
    <>
      <div className="bg-[url('./assets/four.jpg')] bg-cover bg-center h-[70vh]">
          <div className="bg-[rgba(20,20,200,.2)] h-full">
      <Navbar/> 
            <div className="mx-auto mt-[10%] w-[90%] text-white">
              <h1 className="font-bold text-3xl">The Women Ministry</h1>
            </div>
          </div>
      </div>
      <div className="p-16">
          <div className="mx-auto mb-12 w-[80%]">
              <h1 className="mb-6 font-bold text-2xl text-center">About the women ministry</h1>
              
              <p className="w-full text-gray-700 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem exercitationem obcaecati, sed dignissimos in reprehenderit, harum dolores quisquam magni nemo sunt praesentium iste omnis alias ratione nostrum quod laudantium. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem exercitationem obcaecati, sed dignissimos in reprehenderit, harum dolores quisquam magni nemo sunt praesentium iste omnis alias ratione nostrum quod laudantium. Tenetur!</p>
          </div>

          <div className="mx-auto mb-12 w-[80%]">
            <h1 className="mb-6 font-bold text-2xl text-center">Our Activities</h1>
            <p className="w-full text-gray-700 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem exercitationem obcaecati, sed dignissimos in reprehenderit, harum dolores quisquam magni nemo sunt praesentium iste omnis alias ratione nostrum quod laudantium. Tenetur!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nulla et earum quisquam ex laborum beatae, rem sequi at quia? Sit odit quidem dicta voluptatem repellat amet quibusdam sunt eius. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati tenetur vitae consequuntur hic odio eius corporis ratione autem necessitatibus maiores, praesentium, voluptatibus inventore fuga perferendis, facilis veniam officia voluptas voluptatum.</p>
          </div>
         
      </div>
      <Footer/>
    </>
  )
}

export default WomenMinistry