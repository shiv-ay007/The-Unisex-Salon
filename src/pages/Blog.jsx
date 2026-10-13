import { motion } from "framer-motion";
import { FiCalendar, FiCheckCircle, FiClock, FiBookOpen } from "react-icons/fi";
import { salonBlogs, clientReviews } from "../data/salonData";

export default function Blog({ onOpenBooking }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 space-y-20 text-left">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#967014] font-bold inline-flex items-center gap-2">
          <FiBookOpen /> Expert Beauty & Grooming Journal
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#111D35]">
          Hair, Skin & Bridal Care Guides
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Curated aftercare tips and bridal preparation secrets from our senior cosmetologists at AR The Unisex Salon, Lucknow.
        </p>
      </div>

      {/* Blog Articles List */}
      <div className="space-y-8">
        {salonBlogs.map((blog, idx) => (
          <motion.article
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-lg transition items-center"
          >
            <div className="lg:col-span-5 rounded-2xl overflow-hidden h-64 sm:h-72 border border-stone-200">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="px-3 py-1 rounded-full bg-amber-50 text-[#967014] font-bold border border-amber-200">
                  {blog.category}
                </span>
                <span className="text-slate-500 font-medium flex items-center gap-1">
                  <FiClock className="text-[#C59B27]" /> {blog.readTime}
                </span>
                <span className="text-slate-400">• {blog.date}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111D35]">
                {blog.title}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {blog.excerpt}
              </p>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#967014] font-bold block">
                  Key Stylist Recommendations:
                </span>
                {blog.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <FiCheckCircle className="text-[#C59B27] shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C59B27] to-[#A37B19] text-white font-bold text-xs uppercase tracking-wider hover:brightness-105 transition cursor-pointer inline-flex items-center gap-2 shadow-xs"
                >
                  <FiCalendar /> Book Related Consultation
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Client Stories Highlight */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#FFFDF9] to-[#F5EFE2] border border-amber-200 space-y-8 shadow-xs">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#967014] font-bold">
            Verified Guest Experiences
          </span>
          <h2 className="font-display text-3xl font-bold text-[#111D35] mt-1">
            Recent Client Reviews
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clientReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3"
            >
              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                "{review.comment}"
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs">
                <div>
                  <strong className="text-slate-900 block">{review.name}</strong>
                  <span className="text-[#A37B19] font-medium">{review.service}</span>
                </div>
                <span className="text-slate-400 font-medium">{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
