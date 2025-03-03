import { Routes, Route } from "react-router-dom";  
import Home from "./pages/Home";
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
import AboutUs from "./pages/About";




function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs/>} />
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
