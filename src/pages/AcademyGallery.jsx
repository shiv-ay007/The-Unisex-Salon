import { motion } from "framer-motion";
import { FiBookOpen, FiCalendar, FiCheckCircle, FiPhone } from "react-icons/fi";
import { galleryPhotos, academyCourses, salonInfo } from "../data/salonData";

export default function AcademyGallery({ onOpenBooking }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 space-y-20 text-left">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#967014] font-bold">
          Inside AR Unisex Salon & Academy
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#111D35]">
          Studio Showcase & Academy
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Explore real photographs of our Khurram Nagar studio and discover professional cosmetology courses designed for aspiring stylists.
        </p>
      </div>

      {/* Real Studio Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {galleryPhotos.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-md group hover:shadow-xl transition"
          >
            <div className="h-80 overflow-hidden relative">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 border border-stone-200 text-[#967014] text-xs font-bold shadow-xs">
                {item.category}
              </span>
            </div>
            <div className="p-6 bg-white">
              <h3 className="font-display text-2xl font-bold text-[#111D35]">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Academy Section */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white via-[#FFFDF9] to-[#F7F2E7] border border-amber-200 shadow-sm space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#967014] font-bold flex items-center gap-2">
              <FiBookOpen /> Professional Training Institute
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111D35]">
              AR Cosmetology & Makeup Academy
            </h2>
            <p className="text-sm text-slate-600">
              Get certified with live salon floor training in Skin, Hair, Nail Artistry, and Bridal Make-Up at Gemini Apartment, Khurram Nagar, Lucknow.
            </p>
          </div>

          <a
            href={`tel:${salonInfo.phone}`}
            className="px-6 py-3.5 rounded-full bg-[#C59B27] text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 self-start shadow-md hover:brightness-105 transition"
          >
            <FiPhone /> Call Academy Desk: {salonInfo.phone}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {academyCourses.map((course, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#A37B19] font-bold">{course.duration}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-[#967014] font-semibold border border-amber-200">
                    {course.level}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#111D35]">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {course.highlights}
                </p>
                <div className="pt-2 space-y-1.5 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-[#C59B27]" /> 100% Practical Live Model Practice
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-[#C59B27]" /> ISO Recognized Academy Certificate
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking()}
                className="mt-6 w-full py-3 rounded-xl bg-[#111D35] hover:bg-[#C59B27] text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-2"
              >
                <FiCalendar /> Book Free Counseling
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
