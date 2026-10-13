import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import {
  FiMapPin,
  FiPhone,
  FiClock,
  FiSend,
  FiCalendar,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { salonInfo, salonServices } from "../data/salonData";

export default function Contact({ onOpenBooking }) {
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    service: salonServices[0].name,
    message: "",
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.phone.trim()) {
      toast.error("Please fill in your name and mobile number.");
      return;
    }
    toast.success(
      `Thank you, ${contactForm.name}! Our Khurram Nagar studio desk will call you shortly on ${contactForm.phone}.`
    );
    setContactForm({
      name: "",
      phone: "",
      service: salonServices[0].name,
      message: "",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 space-y-16 text-left">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#967014] font-bold">
          Visit Our Flagship Studio
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#111D35]">
          Contact & Directions
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Have a question about bridal makeup packages, hair chemical treatments, or academy admissions? Reach out or visit us directly in Khurram Nagar, Lucknow.
        </p>
      </div>

      {/* Contact Info Cards + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Direct Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-6">
            <h2 className="font-display text-2xl font-bold text-[#111D35]">
              Studio Address & Direct Line
            </h2>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 text-[#A37B19] flex items-center justify-center text-lg shrink-0">
                  <FiMapPin />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                    Salon Address
                  </span>
                  <strong className="text-slate-900 font-semibold leading-relaxed block mt-0.5">
                    {salonInfo.address}
                  </strong>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 text-[#A37B19] flex items-center justify-center text-lg shrink-0">
                  <FiPhone />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                    Appointment Phone
                  </span>
                  <a
                    href={`tel:${salonInfo.phone}`}
                    className="text-lg font-bold text-[#A37B19] hover:underline block mt-0.5"
                  >
                    {salonInfo.phoneFormatted}
                  </a>
                  <span className="text-xs text-slate-500 font-medium">
                    Instant call & WhatsApp booking available
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 text-[#A37B19] flex items-center justify-center text-lg shrink-0">
                  <FiClock />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                    Working Hours
                  </span>
                  <strong className="text-slate-900 font-semibold block mt-0.5">
                    {salonInfo.hours}
                  </strong>
                  <span className="text-xs text-[#967014] font-medium">
                    Open all 7 days including Sundays
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#C59B27] to-[#A37B19] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:brightness-105 transition"
              >
                <FiCalendar /> Book Appointment
              </button>
              <a
                href={`https://wa.me/${salonInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-stone-50 text-slate-800 border border-stone-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-stone-100 transition"
              >
                <FaWhatsapp className="text-base text-emerald-600" /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Storefront Image Card */}
          <div className="rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-md">
            <img
              src="/images/salon-exterior.png"
              alt="AR Unisex Salon Storefront"
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-xs text-slate-600 flex items-center justify-between">
              <span>Easy ground-floor access at Gemini Apartment</span>
              <span className="text-[#A37B19] font-bold">Free Parking</span>
            </div>
          </div>
        </div>

        {/* Right: Quick Inquiry Form + Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 space-y-6"
        >
          <form
            onSubmit={handleContactSubmit}
            className="p-6 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5"
          >
            <div>
              <span className="text-xs uppercase tracking-wider text-[#967014] font-bold">
                Direct Callback Request
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111D35] mt-1">
                Send Us a Message
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-600 font-bold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-slate-900 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-600 font-bold mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={contactForm.phone}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-slate-900 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-600 font-bold mb-2">
                Service Interested In
              </label>
              <select
                value={contactForm.service}
                onChange={(e) =>
                  setContactForm({ ...contactForm, service: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-slate-900 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white"
              >
                {salonServices.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.number}. {s.name} ({s.price})
                  </option>
                ))}
                <option value="Cosmetology Academy Course">
                  Cosmetology Academy Course Inquiry
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-600 font-bold mb-2">
                Your Message / Query
              </label>
              <textarea
                rows="3"
                placeholder="Tell us your preferred date, bridal package query, or hair concern..."
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm({ ...contactForm, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-slate-900 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C59B27] to-[#A37B19] text-white font-bold text-xs uppercase tracking-wider hover:brightness-105 transition cursor-pointer flex items-center justify-center gap-2 shadow-sm"
            >
              <FiSend /> Request Instant Callback
            </button>
          </form>

          {/* Embedded Google Map */}
          <div className="rounded-3xl overflow-hidden border border-stone-200 h-64 shadow-md">
            <iframe
              title="AR The Unisex Salon Location Map"
              src="https://www.google.com/maps?q=Kamla+Nehru+Nagar,+Khurram+Nagar,+Lucknow&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
