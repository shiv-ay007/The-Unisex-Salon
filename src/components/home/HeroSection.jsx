import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiCalendar,
  FiArrowRight,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const heroSlides = [
  {
    id: 1,
    tag: "SIGNATURE BLOW-DRY & RESTYLING",
    title: "Precision Hair Restyling & Luxury Gloss Finish",
    subtitle:
      "Transform dull hair into weightless, radiant texture with customized cut geometry and Moroccan Argan blow-dry finish.",
    image: "/images/hair-styling-1.jpg",
    badgeText: "Trendy Layers & Butterfly Cuts",
  },
  {
    id: 2,
    tag: "BALAYAGE & KERATIN SMOOTHENING",
    title: "Dimensional Global Balayage & Keratin Shine",
    subtitle:
      "Ammonia-free French balayage, honey blonde babylights, and mirror-shine Keratin protein treatments crafted for Indian hair.",
    image: "/images/hair-styling-2.jpg",
    badgeText: "Zero Frizz • 100% Gloss Lock",
  },
  {
    id: 3,
    tag: "ROYAL BRIDAL COIFFURE",
    title: "Royal Bridal Hairstyling & HD Make-Up Artistry",
    subtitle:
      "Exquisite floral updos, Hollywood waves, and royal bridal ornamentation paired with 24-hour waterproof HD makeover.",
    image: "/images/hair-styling-3.jpg",
    badgeText: "High-Definition Bridal Suite",
  },
  {
    id: 4,
    tag: "OZONE SCALP & STEAM DETOX",
    title: "Moroccan Argan Hair Spa & Scalp Therapy",
    subtitle:
      "Deep moisture infusion, anti-hairfall ozone steam therapy, and 20-minute restorative pressure-point head and neck massage.",
    image: "/images/hair-styling-4.jpg",
    badgeText: "Deep Follicle Nourishment",
  },
];

export default function HeroSection({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Uninterrupted smooth auto-scroll every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const active = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-[calc(100vh-100px)] min-h-[560px] max-h-[720px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* 1. Crystal-Clear Full Background Slider Images with Continuous Auto-Scroll */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={active.image}
            alt={active.title}
            className="w-full h-full object-cover object-center"
          />

          {/* Crisp natural contrast gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* 2. Text Content (Fits neatly in single screen) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 w-full text-left">
        <div className="max-w-xl sm:max-w-2xl space-y-4 sm:space-y-5">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#ECC94B]/70 text-[#F6E08B] text-xs font-bold tracking-wider uppercase shadow-md">
            <FiStar className="text-xs fill-[#ECC94B] text-[#ECC94B]" />
            <span>{active.tag}</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-white font-medium hidden sm:inline">{active.badgeText}</span>
          </div>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="space-y-3"
            >
              <h1 className="font-display text-3xl sm:text-5xl lg:text-5xl font-bold text-white leading-[1.12] tracking-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]">
                {active.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-100 leading-relaxed max-w-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] font-normal line-clamp-2 sm:line-clamp-none">
                {active.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => onOpenBooking(active.title)}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-[#ECC94B] to-[#D4AF37] text-[#071120] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <FiCalendar className="text-sm" />
              Reserve Your Chair
            </button>
            <Link
              to="/services"
              className="px-6 py-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#071120] border border-white/40 hover:border-white font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-sm"
            >
              Explore 10 Services
              <FiArrowRight className="text-xs" />
            </Link>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20 max-w-md text-white">
            <div>
              <div className="font-display text-xl sm:text-2xl font-bold text-[#ECC94B]">
                4.9★
              </div>
              <div className="text-[11px] text-slate-200 mt-0.5">Top-Rated Studio</div>
            </div>
            <div>
              <div className="font-display text-xl sm:text-2xl font-bold text-[#ECC94B]">
                10+
              </div>
              <div className="text-[11px] text-slate-200 mt-0.5">Parlour Rituals</div>
            </div>
            <div>
              <div className="font-display text-xl sm:text-2xl font-bold text-[#ECC94B]">
                100%
              </div>
              <div className="text-[11px] text-slate-200 mt-0.5">UV Sterilized</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Slider Nav Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-[#ECC94B] text-white hover:text-[#071120] border border-white/30 hover:border-[#ECC94B] flex items-center justify-center transition-all duration-300 z-30 cursor-pointer shadow-lg"
      >
        <FiChevronLeft className="text-xl" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-[#ECC94B] text-white hover:text-[#071120] border border-white/30 hover:border-[#ECC94B] flex items-center justify-center transition-all duration-300 z-30 cursor-pointer shadow-lg"
      >
        <FiChevronRight className="text-xl" />
      </button>

      {/* 4. Bottom Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/60 px-4 py-2 rounded-full border border-white/20 shadow-md">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
            className="flex items-center gap-1.5 cursor-pointer"
          >
            <span
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-6 bg-[#ECC94B]"
                  : "w-2 bg-white/40 hover:bg-white"
              }`}
            />
            {currentSlide === index && (
              <span className="text-[10px] font-bold text-[#ECC94B] uppercase tracking-wider hidden sm:inline">
                0{index + 1}
              </span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
