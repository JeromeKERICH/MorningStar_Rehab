import { Routes, Route } from "react-router-dom";  
import Home from "./pages/Home";
import About from "./pages/About";
import AnonymousForm from "./pages/AnonymousPage";
import Donation from "./pages/DonationPage";
import DonationImpact from "./pages/DonationMore";
import Scholarship from "./pages/Scholarship";
import Rehabilitation from "./pages/Rehabilitation";




function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="anonymousform" element={<AnonymousForm />} />
      <Route path="donation" element={<Donation/>}/>
      <Route path="donationimpact" element={<DonationImpact/>}/>
      <Route path="scholarship" element={<Scholarship/>}/>
      <Route path ="rehabilitation" element={<Rehabilitation/>}/>
    </Routes>
  );
}

export default AppRoutes;
