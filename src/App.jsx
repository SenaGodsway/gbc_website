import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import AboutUs from "./pages/about_us"
// import Ministries from "./pages/ministries"
import MenMinisty from "./pages/men_ministy"
import WomenMinistry from "./pages/women_ministry"
import Sermons from "./pages/sermons"
import Events from "./pages/events"
import Give from "./pages/give"
import Contact from "./pages/contact_us"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/about_us" element={<AboutUs/>}/>
      <Route path="/men_ministry" element={<MenMinisty/>}/>
      <Route path="/women_ministry" element={<WomenMinistry/>}/>

      <Route path="/sermons" element={<Sermons/>}/>
      <Route path="/events" element={<Events/>}/>

      <Route path="/give" element={<Give/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
     {/* <LandingPage/> */}
    </>
  )
}

export default App