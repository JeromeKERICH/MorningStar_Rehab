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
import FounderBio from "./pages/Founders";
import PrayerMeditation from "./blogpages/InnerPeace";
import FaithBasedHealing from "./blogpages/Faith";
import GroupTherapy from "./blogpages/GroupTherapy";
import CBT from "./blogpages/CBT";
import GoodSleep from "./blogpages/GoodSleep";
import FamilyRehab from "./blogpages/FamilyRehab";
import HealthyTips from "./blogpages/HealtyTips";
import BreakingFree from "./blogpages/BreakFree";
import Anxiety from "./blogpages/Anxiety";
import Trauma from "./blogpages/Trauma";
import SignsOfAddiction from "./blogpages/Signs";
import SupportOne from "./blogpages/SupportOne";
import MentalHe from "./blogpages/MentalH";




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
      <Route path="founderbio" element={<FounderBio/>}/>
      <Route path="prayermeditation" element={<PrayerMeditation/>}/>
      <Route path="/faithBasedhealing" element={<FaithBasedHealing/>}/>
      <Route path="/grouptherapy" element={<GroupTherapy/>}/>
      <Route path="cbt" element={<CBT/>}/>
      <Route path="goodsleep" element={<GoodSleep/>}/>
      <Route path="familyrehab" element={<FamilyRehab/>}/>
      <Route path="healthytips" element={<HealthyTips/>}/>
      <Route path="breakingfree" element={<BreakingFree/>}/>
      <Route path="anxiety" element={<Anxiety/>}/>
      <Route path="trauma" element={<Trauma/>}/>
      <Route path="signsofaddiction" element={<SignsOfAddiction/>}/>
      <Route path="supportone" element={<SupportOne/>}/>
      <Route path="mentalhe" element={<MentalHe/>}/>
    </Routes>
  );
}

export default AppRoutes;
