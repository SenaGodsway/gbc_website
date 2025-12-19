import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'
import five from '../assets/five.jpg'
import six from '../assets/six.jpg'

const AboutUs = () => {
  // const images = [
  //   one,
  //   two,
  //   three,
  //   four,
  //   five,
  //   six
  // ];
  return (
    <>
    <div className="bg-blue-800">
        <Navbar/>
        </div>
    <section className="bg-[url('./assets/three.jpg')] bg-cover bg-center h-[80vh]" >
          <div className="bg-[rgba(2,2,255,.2)] h-full relative">
            <div className="mx-auto p-6 w-[90%] absolute bottom-8 text-white">
                 <h1 className='font-bold text-3xl'>Our Story</h1>
                 <p className='w-4/5 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsam nobis sit, voluptates corporis corrupti cupiditate?</p>
            </div>
        </div>
    </section>
    <div className='mx-auto py-36 w-[90%]'>
    <div className='mx-auto my-24 w-3/4'>
        <h1 className='mb-6 font-bold text-2xl text-center'>Our History</h1>
        <p className='text-center text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quaerat perferendis quis, sequi dignissimos cumque quisquam culpa. Officiis alias perspiciatis at commodi ducimus, ut error nesciunt temporibus nihil, modi quod?
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, distinctio voluptate totam modi, omnis explicabo delectus aut ab quo quam libero eveniet magni, expedita veniam non at soluta commodi exercitationem!</p>
    </div>

    <div className='flex gap-12 mt-32'>
        <div className='w-1/2'>
          <h1 className='mb-6 font-bold text-2xl'>Our History</h1>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quaerat perferendis quis, sequi dignissimos cumque quisquam culpa. Officiis alias perspiciatis at commodi ducimus, ut error nesciunt temporibus nihil, modi quod?</p>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, distinctio voluptate totam modi, omnis explicabo delectus aut ab quo quam libero eveniet magni, expedita veniam non at soluta commodi exercitationem!</p>
        </div>
        <div className='w-1/2'>
          <img 
          className='w-full'
          src={one} alt="" />
        </div>
    </div>
    <div className='my-24 p-1'></div>
    <div className='flex mt-24'>
        <div className='w-1/2'>
        <img 
          className='w-full'
          src={six} alt="" />
        </div> 
        <div className='p-6 w-1/2'>
          <h1 className='mb-6 font-bold text-2xl'>Our Mission</h1>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quaerat perferendis quis, sequi dignissimos cumque quisquam culpa. Officiis alias perspiciatis at commodi ducimus, ut error nesciunt temporibus nihil, modi quod?</p>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, distinctio voluptate totam modi, omnis explicabo delectus aut ab quo quam libero eveniet magni, expedita veniam non at soluta commodi exercitationem!</p>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default AboutUs
