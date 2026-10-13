import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiStar, FiArrowRight, FiClock } from "react-icons/fi";
import { salonServices } from "../../data/salonData";

export default function HomeServicesSection({ onOpenBooking }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#967014] font-bold flex items-center gap-2">
            <FiStar className="text-sm fill-[#967014]" /> Bespoke Parlour Menu
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111D35] mt-1">
            10 Signature Salon Services
          </h2>
          <p className="text-sm text-slate-500 mt-1.5 max-w-xl">
            From Keratin smoothening to Royal HD Bridal Makeup, choose from our 10 specialized parlour rituals.
          </p>
        </div>

        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#A37B19] hover:text-[#111D35] transition"
        >
          View Full Service Menu <FiArrowRight />
        </Link>
      </div>

      {/* Minimal & Sleek Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {salonServices.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="group relative rounded-2xl bg-white border border-stone-200/90 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(17,29,53,0.08)] transition-all duration-500 flex flex-col justify-between p-6 sm:p-7"
          >
            {/* Smooth Left-To-Right Animated Overlay (Subtle Warm Pearl to Amber Mist) */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-200/25 to-amber-500/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out pointer-events-none" />

            {/* Left Accent Accent Line on Hover */}
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#C59B27] to-[#A37B19] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Card Content */}
            <div className="relative z-10">
              {/* Header Micro Bar */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#A37B19] group-hover:text-[#111D35] transition duration-300">
                  {service.number}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-stone-100 text-slate-600 group-hover:bg-white group-hover:shadow-xs transition duration-300">
                    {service.category}
                  </span>
                  {service.popular && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100/80 text-[#967014] border border-amber-300/70">
                      Popular
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-2xl font-bold text-[#111D35] group-hover:text-[#967014] transition duration-300 leading-snug">
                {service.name}
              </h3>
              <p className="text-xs text-slate-500 mt-2.5 leading-relaxed line-clamp-2">
                {service.description}
              </p>

              {/* Minimal Clean Key Points */}
              <div className="mt-4 pt-3 border-t border-stone-100 space-y-1.5 text-[11px] text-slate-600">
                {service.highlights.slice(0, 3).map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Price & Button Bar */}
            <div className="relative z-10 mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                  Starting At
                </span>
                <span className="font-display text-2xl font-bold text-[#A37B19] group-hover:text-[#111D35] transition duration-300">
                  {service.price}
                </span>
              </div>

              {/* Interactive Button */}
              <button
                type="button"
                onClick={() => onOpenBooking(service.name)}
                className="relative overflow-hidden px-4 py-2 rounded-xl bg-[#111D35] text-white text-xs font-semibold tracking-wide transition-all duration-300 group-hover:bg-[#C59B27] group-hover:shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <span>Book Service</span>
                <FiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
