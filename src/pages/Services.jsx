import { useState } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiStar, FiPhone, FiArrowRight } from "react-icons/fi";
import { salonServices, salonInfo } from "../data/salonData";

const categories = ["All", "Hair", "Skin", "Make-Up", "Nail"];

export default function Services({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? salonServices
      : salonServices.filter((s) => s.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 space-y-14 text-left">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#967014] font-bold inline-flex items-center gap-1.5">
          <FiStar className="fill-[#967014]" /> SKIN • HAIR • NAIL • MAKE-UP
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#111D35]">
          10 Signature Parlour Services
        </h1>
        <p className="text-sm text-slate-500">
          Curated luxury treatments for men and women. Click on any ritual to reserve your chair with the service pre-selected.
        </p>

        {/* Category Filter Pills */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#111D35] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-stone-200 hover:border-amber-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Minimal & Sleek Services Menu Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredServices.map((service) => (
          <motion.div
            layout
            key={service.id}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="group relative rounded-2xl bg-white border border-stone-200/90 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(17,29,53,0.08)] transition-all duration-500 flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Smooth Left-To-Right Animated Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-200/25 to-amber-500/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out pointer-events-none" />

            {/* Left Accent Accent Line */}
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#C59B27] to-[#A37B19] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#A37B19] group-hover:text-[#111D35] transition duration-300">
                    {service.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-stone-100 text-slate-600 group-hover:bg-white group-hover:shadow-xs transition duration-300">
                    {service.category} Ritual
                  </span>
                </div>

                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <FiClock className="text-[#C59B27]" /> {service.duration}
                </span>
              </div>

              <div className="flex items-baseline justify-between gap-4 border-b border-stone-100 pb-3">
                <h2 className="font-display text-2xl font-bold text-[#111D35] group-hover:text-[#967014] transition duration-300">
                  {service.name}
                </h2>
                <span className="font-display text-2xl sm:text-3xl font-bold text-[#A37B19] group-hover:text-[#111D35] transition duration-300 shrink-0">
                  {service.price}
                </span>
              </div>

              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {service.highlights.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1 rounded-full bg-stone-50 border border-stone-200/80 text-slate-600 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                Includes styling consultation
              </span>
              <button
                onClick={() => onOpenBooking(service.name)}
                className="px-5 py-2.5 rounded-xl bg-[#111D35] group-hover:bg-[#C59B27] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-xs group-hover:shadow-md cursor-pointer flex items-center gap-2"
              >
                <span>Reserve Ritual</span>
                <FiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom Bridal / Combo Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#111D35] to-[#1D3158] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#E5C158] font-bold">
            Custom Pre-Bridal & Groom Packages
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Want to Combine Multiple Parlour Services?
          </h3>
          <p className="text-sm text-slate-200 max-w-xl">
            Select multiple services directly inside our booking form, or call us for custom bridal and family packages.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-3.5 rounded-full bg-[#C59B27] text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md hover:brightness-110 transition"
          >
            Create Custom Booking
          </button>
          <a
            href={`tel:${salonInfo.phone}`}
            className="px-5 py-3.5 rounded-full border border-white/25 text-white text-xs font-bold flex items-center gap-2 hover:bg-white/10 transition"
          >
            <FiPhone className="text-[#E5C158]" /> {salonInfo.phoneFormatted}
          </a>
        </div>
      </div>
    </div>
  );
}
