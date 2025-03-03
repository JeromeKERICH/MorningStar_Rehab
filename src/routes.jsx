import { Routes, Route } from "react-router-dom";  
import Home from "./pages/Home";
import About from "./pages/About";
import AnonymousForm from "./pages/AnonymousPage";
import Donation from "./pages/DonationPage";
import DonationImpact from "./pages/DonationMore";
import Scholarship from "./pages/Scholarship";
import Rehabilitation from "./pages/Rehabilitation";
import CounselingServices from "./components/counseling/CounselOverview";
import GymExercise from "./pages/Gym";
import SaunaWellness from "./pages/Sauna";
import MassageTherapy from "./pages/Massage";
import BlogSection from "./pages/Blog";




function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="anonymousform" element={<AnonymousForm />} />
      <Route path="donation" element={<Donation/>}/>
      <Route path="donationimpact" element={<DonationImpact/>}/>
      <Route path="scholarship" element={<Scholarship/>}/>
      <Route path="rehabilitation" element={<Rehabilitation/>}/>
      <Route path="counselingservices" element={<CounselingServices/>}/>
      <Route path="gymexercise" element={<GymExercise/>}/>
      <Route path="saunawellness" element={<SaunaWellness/>}/>
      <Route path="massagetherapy" element={<MassageTherapy/>}/>
      <Route path="blogsection" element={<BlogSection/>}/>
      
    </Routes>
  );
}

export default AppRoutes;
