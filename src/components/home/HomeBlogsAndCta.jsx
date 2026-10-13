import { Link } from "react-router-dom";
import { FiArrowRight, FiCalendar } from "react-icons/fi";
import { salonBlogs, salonInfo } from "../../data/salonData";

export default function HomeBlogsAndCta({ onOpenBooking }) {
  return (
    <div className="space-y-24">
      {/* Blogs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#967014] font-bold">
              The Beauty Journal
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111D35] mt-1">
              Salon Blogs & Haircare Tips
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-sm text-[#A37B19] font-bold hover:underline flex items-center gap-1.5"
          >
            Read All Articles <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {salonBlogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-2xl overflow-hidden border border-stone-200 bg-white group flex flex-col justify-between shadow-sm hover:shadow-lg transition"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-[#A37B19] border border-amber-200 shadow-xs">
                  {blog.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {blog.date} • {blog.readTime}
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900 mt-1.5 group-hover:text-[#A37B19] transition leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100">
                  <Link
                    to="/blog"
                    className="text-xs text-[#A37B19] font-bold flex items-center gap-1 hover:underline"
                  >
                    Read Full Article <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* High-conversion Royal Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-8">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-[#111D35] via-[#1A2E55] to-[#111D35] text-white text-center space-y-6 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs uppercase tracking-[0.25em] text-[#E5C158] font-bold">
            Book In Advance • Zero Waiting Time
          </span>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Ready to Transform Your Look at AR The Unisex Salon?
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto">
            Reserve your chair online or call our Khurram Nagar desk at{" "}
            <a
              href={`tel:${salonInfo.phone}`}
              className="text-[#E5C158] font-bold underline decoration-amber-400"
            >
              {salonInfo.phoneFormatted}
            </a>
            .
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C59B27] to-[#A37B19] text-white font-bold text-sm tracking-wide uppercase hover:brightness-110 shadow-lg transition cursor-pointer flex items-center gap-2"
            >
              <FiCalendar className="text-base" />
              Open Booking Form
            </button>
            <a
              href={`https://wa.me/${salonInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
