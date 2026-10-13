import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import AcademyGallery from "../pages/AcademyGallery";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

export default function MainRoutes({ onOpenBooking }) {
  return (
    <Routes>
      <Route path="/" element={<Home onOpenBooking={onOpenBooking} />} />
      <Route path="/about" element={<About onOpenBooking={onOpenBooking} />} />
      <Route path="/services" element={<Services onOpenBooking={onOpenBooking} />} />
      <Route path="/academy" element={<AcademyGallery onOpenBooking={onOpenBooking} />} />
      <Route path="/blog" element={<Blog onOpenBooking={onOpenBooking} />} />
      <Route path="/contact" element={<Contact onOpenBooking={onOpenBooking} />} />
    </Routes>
  );
}
