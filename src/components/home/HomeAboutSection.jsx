import { Link } from "react-router-dom";
import { FiAward, FiCheckCircle, FiShield, FiClock, FiArrowRight } from "react-icons/fi";

export default function HomeAboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8">
      <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-white via-[#FFFDF9] to-[#F7F2E7] border border-amber-200/80 shadow-[0_15px_40px_rgba(17,29,53,0.06)] relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 text-left space-y-5">
            <span className="text-xs uppercase tracking-[0.25em] text-[#967014] font-bold flex items-center gap-2">
              <FiAward className="text-sm" /> About Our Studio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111D35]">
              A Fusion of Modern Cosmetology & Royal Pampering
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Located at Gemini Apartment, Kamla Nehru Nagar, Khurram Nagar,{" "}
              <strong className="text-slate-900">AR The Unisex Salon & Academy</strong> was crafted to redefine family salon standards in Lucknow.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you desire an executive fade, a 24K Gold Hydra-Glow facial, or an all-inclusive bridal makeover, our certified cosmetologists deliver precision in a clean, brightly lit, welcoming studio.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <FiCheckCircle className="text-[#C59B27] text-base shrink-0" />
                <span>Dermatology-certified skincare machinery & sterile tools</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <FiCheckCircle className="text-[#C59B27] text-base shrink-0" />
                <span>Exclusive private cabins for brides & rejuvenating facials</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <FiCheckCircle className="text-[#C59B27] text-base shrink-0" />
                <span>Cosmetology Academy offering professional certifications</span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm text-[#A37B19] font-bold hover:underline"
              >
                Explore Our Full Story <FiArrowRight />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm group">
                <img
                  src="/images/salon-reception.png"
                  alt="Salon Reception"
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5 rounded-2xl bg-white border border-stone-200 text-left shadow-xs">
                <FiShield className="text-[#C59B27] text-2xl mb-2" />
                <h4 className="font-display text-lg text-slate-900 font-semibold">
                  100% Genuine Products
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Authentic L'Oréal Professionnel, Schwarzkopf, O3+, and MAC cosmetics.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:pt-6">
              <div className="p-5 rounded-2xl bg-white border border-stone-200 text-left shadow-xs">
                <FiClock className="text-[#C59B27] text-2xl mb-2" />
                <h4 className="font-display text-lg text-slate-900 font-semibold">
                  Open All 7 Days
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  10:00 AM to 9:00 PM with priority slot reservations.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm group">
                <img
                  src="/images/salon-exterior.png"
                  alt="Salon Storefront"
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
