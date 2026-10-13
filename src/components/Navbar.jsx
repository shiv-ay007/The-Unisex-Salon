import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiPhone, FiCalendar, FiMenu, FiX, FiClock, FiMapPin } from "react-icons/fi";
import { salonInfo } from "../data/salonData";

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services (10)", path: "/services" },
    { label: "Academy & Gallery", path: "/academy" },
    { label: "Blog & Tips", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top bar with Royal Navy background for crisp brand identity */}
      <div className="bg-[#111D35] text-white py-2 px-4 sm:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-200">
            <span className="flex items-center gap-1.5 font-medium">
              <FiMapPin className="text-[#C59B27]" />
              Khurram Nagar, Lucknow
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <FiClock className="text-[#C59B27]" />
              {salonInfo.hours}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${salonInfo.phone}`}
              className="text-[#E5C158] font-bold flex items-center gap-1.5 hover:underline"
            >
              <FiPhone />
              {salonInfo.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar with Crisp White & Frosted Glass */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-amber-100 py-3"
            : "bg-white/90 backdrop-blur-sm border-b border-stone-200 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="AR Unisex Salon Logo"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#C59B27] shadow-sm group-hover:scale-105 transition duration-300"
            />
            <div className="text-left">
              <span className="block font-display text-xl sm:text-2xl font-bold tracking-tight text-[#111D35] leading-tight">
                AR <span className="text-[#A37B19]">UNISEX SALON</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-slate-500 font-semibold">
                & Academy • Lucknow
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? "text-[#A37B19]"
                      : "text-slate-700 hover:text-[#A37B19]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C59B27] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action Button: Book Appointment */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C59B27] to-[#A37B19] text-white font-semibold text-xs tracking-wider uppercase hover:shadow-lg hover:brightness-105 transition shadow-sm cursor-pointer flex items-center gap-2"
            >
              <FiCalendar className="text-sm stroke-[2.5]" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3.5 py-1.5 rounded-full bg-[#C59B27] text-white font-bold text-xs"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 text-slate-800 hover:text-[#A37B19] cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-2 text-left shadow-lg">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2.5 px-3 rounded-lg text-sm font-semibold ${
                    isActive
                      ? "bg-amber-50 text-[#A37B19]"
                      : "text-slate-700 hover:bg-stone-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-stone-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C59B27] to-[#A37B19] text-white font-bold text-sm text-center flex items-center justify-center gap-2"
              >
                <FiCalendar />
                Book Your Parlour Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
