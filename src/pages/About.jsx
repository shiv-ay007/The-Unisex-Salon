import { motion } from "framer-motion";
import {
  FiAward,
  FiHeart,
  FiShield,
  FiSmile,
  FiPhone,
  FiCalendar,
} from "react-icons/fi";
import { salonInfo, academyCourses } from "../data/salonData";

export default function About({ onOpenBooking }) {
  const pillars = [
    {
      icon: FiShield,
      title: "Hospital-Grade Hygiene",
      desc: "Every comb, scissor, and extractor undergoes UV sterilization after each guest. Disposable sheets and fresh towels are standard.",
    },
    {
      icon: FiAward,
      title: "Certified Master Stylists",
      desc: "Our hair artists, aestheticians, and bridal makeup specialists hold advanced certifications in colour chemistry and dermatological care.",
    },
    {
      icon: FiHeart,
      title: "Unisex & Family Friendly",
      desc: "Designed with separate private facial cabins, comfortable shampoo stations, and a peaceful waiting lounge for families.",
    },
    {
      icon: FiSmile,
      title: "Transparent Pricing",
      desc: "Honest consultations with sealed international products shown before application—zero hidden charges.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 space-y-20 text-left">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <span className="text-xs uppercase tracking-[0.25em] text-[#967014] font-bold">
          Our Story & Heritage
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#111D35]">
          AR The Unisex Salon & Academy
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Crafting confidence through luxury hair artistry, advanced skin transformations, and bridal elegance in the heart of Khurram Nagar, Lucknow.
        </p>
      </motion.div>

      {/* Main Story Section with Real Salon Photos */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#967014] text-xs font-bold">
            Welcome to AR The Family Salon
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111D35] leading-tight">
            Where Traditional Warmth Meets International Salon Standards
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Situated at <strong className="text-slate-900">{salonInfo.address}</strong>, AR The Unisex Salon & Academy was established with a singular vision: to bring metropolitan luxury grooming and clinical-grade skin rituals to Lucknow at accessible prices.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            From our serene reception lounge adorned with our signature golden flute emblem to our modern hydraulic styling stations and dedicated Hydra-Facial cabin, every corner of our studio is curated for your comfort.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-3">
            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="font-display text-2xl font-bold text-[#A37B19]">
                Skin & Hair
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Custom treatments for Indian hair textures & weather
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="font-display text-2xl font-bold text-[#A37B19]">
                Nail & Bridal
              </div>
              <p className="text-xs text-slate-500 mt-1">
                HD/Airbrush bridal suites & bespoke nail bar
              </p>
            </div>
          </div>

          <div className="pt-3 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C59B27] to-[#A37B19] text-white font-bold text-xs uppercase tracking-wider hover:brightness-105 shadow-md transition cursor-pointer flex items-center gap-2"
            >
              <FiCalendar /> Reserve Your Visit
            </button>
            <a
              href={`tel:${salonInfo.phone}`}
              className="px-6 py-3 rounded-full bg-white border border-stone-300 text-slate-800 text-xs font-bold hover:border-[#C59B27] transition flex items-center gap-2"
            >
              <FiPhone className="text-[#A37B19]" /> {salonInfo.phoneFormatted}
            </a>
          </div>
        </div>

        {/* Real Salon Photos Showcase */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-md">
            <img
              src="/images/salon-reception.png"
              alt="AR Salon Reception"
              className="w-full h-72 object-cover"
            />
            <div className="p-3.5 bg-white text-xs text-slate-600">
              <strong className="text-[#A37B19] block">Reception Lounge</strong>
              AR The Family Salon welcoming desk
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-md sm:mt-8">
            <img
              src="/images/salon-interior.png"
              alt="AR Salon Styling Chairs & Facial Machine"
              className="w-full h-72 object-cover"
            />
            <div className="p-3.5 bg-white text-xs text-slate-600">
              <strong className="text-[#A37B19] block">Styling & Skin Bay</strong>
              Hydraulic chairs & Hydra-dermabrasion suite
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars Grid */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#967014] font-bold">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl font-bold text-[#111D35] mt-1">
            The Gold Standard of Grooming
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-amber-300 shadow-sm hover:shadow-md transition"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 text-[#A37B19] flex items-center justify-center text-xl mb-4">
                  <Icon />
                </div>
                <h3 className="font-display text-xl font-bold text-[#111D35]">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Academy Section */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#FFFDF9] to-[#F5EFE2] border border-amber-200 shadow-sm">
        <div className="max-w-2xl mb-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#967014] font-bold">
            AR Salon & Academy
          </span>
          <h2 className="font-display text-3xl font-bold text-[#111D35] mt-1">
            Learn From Master Cosmetologists
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Launch your career in the beauty industry with hands-on practical training at our Khurram Nagar academy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {academyCourses.map((course, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#A37B19] font-bold mb-2">
                  <span>{course.duration}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200">
                    {course.level}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#111D35]">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {course.highlights}
                </p>
              </div>

              <button
                onClick={() => onOpenBooking()}
                className="mt-5 w-full py-2.5 rounded-xl bg-[#111D35] text-white text-xs font-bold hover:bg-[#C59B27] transition cursor-pointer"
              >
                Inquire About Batch
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
