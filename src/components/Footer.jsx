import { Link } from "react-router-dom";
import {
  FiPhone,
  FiMapPin,
  FiClock,
  FiInstagram,
  FiFacebook,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { salonInfo, salonServices } from "../data/salonData";

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-[#F5F0E6] border-t border-amber-200/80 pt-16 pb-8 text-left text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top VIP banner */}
        <div className="mb-14 p-8 rounded-3xl bg-white border border-amber-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[#967014] font-bold">
              Ready for a Glamorous Transformation?
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#111D35]">
              Experience Lucknow's Premier Unisex Salon & Academy
            </h3>
            <p className="text-sm text-slate-600">
              Get 15% off on your first bridal, skin, or hair smoothing session.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C59B27] to-[#A37B19] text-white font-bold text-sm hover:brightness-105 transition shadow-md cursor-pointer"
            >
              Book Appointment Now
            </button>
            <a
              href={`tel:${salonInfo.phone}`}
              className="px-5 py-3 rounded-full bg-stone-50 border border-stone-300 text-slate-800 font-bold text-sm hover:border-[#C59B27] hover:text-[#A37B19] transition"
            >
              Call Us: {salonInfo.phone}
            </a>
          </div>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="AR Salon Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#C59B27]"
              />
              <div>
                <h4 className="font-display text-xl text-[#111D35] font-bold">
                  AR UNISEX SALON
                </h4>
                <p className="text-xs text-[#967014] font-bold tracking-wider">
                  & ACADEMY • LUCKNOW
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Lucknow’s trusted destination for luxury hair styling, dermatology-grade Hydra facials, bridal makeovers, and nail artistry.
            </p>

            <div className="pt-2 flex items-center gap-3 text-lg">
              <a
                href={`https://wa.me/${salonInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white border border-stone-300 text-[#A37B19] flex items-center justify-center hover:bg-[#C59B27] hover:text-white transition shadow-xs"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-stone-300 text-[#A37B19] flex items-center justify-center hover:bg-[#C59B27] hover:text-white transition shadow-xs"
              >
                <FiInstagram />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white border border-stone-300 text-[#A37B19] flex items-center justify-center hover:bg-[#C59B27] hover:text-white transition shadow-xs"
              >
                <FiFacebook />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-display text-lg text-[#111D35] font-bold mb-4 border-l-2 border-[#C59B27] pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-[#A37B19] transition flex items-center gap-1.5">
                  <FiArrowRight className="text-xs text-[#C59B27]" /> Home Sanctuary
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#A37B19] transition flex items-center gap-1.5">
                  <FiArrowRight className="text-xs text-[#C59B27]" /> About Our Studio
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#A37B19] transition flex items-center gap-1.5">
                  <FiArrowRight className="text-xs text-[#C59B27]" /> 10 Signature Services
                </Link>
              </li>
              <li>
                <Link to="/academy" className="hover:text-[#A37B19] transition flex items-center gap-1.5">
                  <FiArrowRight className="text-xs text-[#C59B27]" /> Academy Courses & Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#A37B19] transition flex items-center gap-1.5">
                  <FiArrowRight className="text-xs text-[#C59B27]" /> Beauty & Hair Guides
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#A37B19] transition flex items-center gap-1.5">
                  <FiArrowRight className="text-xs text-[#C59B27]" /> Studio Location & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Parlour Services */}
          <div>
            <h4 className="font-display text-lg text-[#111D35] font-bold mb-4 border-l-2 border-[#C59B27] pl-2.5">
              Featured Rituals
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {salonServices.slice(0, 6).map((service) => (
                <li key={service.id} className="flex items-center justify-between text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <FiCheckCircle className="text-[#C59B27] text-xs shrink-0" />
                    {service.name}
                  </span>
                  <span className="text-[#A37B19] font-bold">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Studio Info */}
          <div>
            <h4 className="font-display text-lg text-[#111D35] font-bold mb-4 border-l-2 border-[#C59B27] pl-2.5">
              Studio Address
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-[#A37B19] text-base shrink-0 mt-1" />
                <span className="text-slate-600 leading-snug font-medium">
                  {salonInfo.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-[#A37B19] text-base shrink-0" />
                <a href={`tel:${salonInfo.phone}`} className="text-[#A37B19] font-bold hover:underline">
                  {salonInfo.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiClock className="text-[#A37B19] text-base shrink-0" />
                <span className="text-slate-600 text-xs font-medium">Open 7 Days: 10:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-stone-300/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} AR The Unisex Salon & Academy. All Rights Reserved.</p>
          <p>Luxury Grooming, Bridal Artistry & Cosmetology Education</p>
        </div>
      </div>
    </footer>
  );
}
