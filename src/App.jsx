import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BookingModal from "./components/BookingModal";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  const handleOpenBooking = (serviceName = "") => {
    setPreselectedService(serviceName);
    setBookingOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#111D35] selection:bg-[#C59B27] selection:text-white">
        {/* Sticky Light Luxury Navbar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Main Page Routes */}
        <main className="flex-grow">
          <MainRoutes onOpenBooking={handleOpenBooking} />
        </main>

        {/* Luxury Footer */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* Interactive Parlour Appointment Modal */}
        <BookingModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
          initialService={preselectedService}
        />

        {/* Scroll To Top & Floating WhatsApp */}
        <ScrollToTop />

        {/* Toast Notifications */}
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
