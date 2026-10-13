import { FiStar, FiMapPin, FiAward } from "react-icons/fi";
import { clientReviews, galleryPhotos } from "../../data/salonData";

export default function HomeReviewsSection() {
  return (
    <div className="space-y-24">
      {/* Studio Gallery Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-left">
        <div className="mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#967014] font-bold flex items-center gap-2">
            <FiAward className="text-sm" /> Studio Ambience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111D35] mt-1">
            Glimpse of AR The Unisex Salon
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            Tour our Khurram Nagar studio featuring private therapy cabins, modern styling stations, and certified machinery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm hover:shadow-lg transition"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111D35]/90 via-[#111D35]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#E5C158] font-bold">
                  {photo.category}
                </span>
                <h4 className="font-display text-base text-white font-semibold leading-snug">
                  {photo.title}
                </h4>
                <p className="text-[11px] text-slate-200 mt-0.5 line-clamp-1">
                  {photo.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-left">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#967014] font-bold flex items-center gap-2">
            <FiStar className="text-sm fill-[#967014]" /> Client Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111D35] mt-1">
            What Our Lucknow Patrons Say
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            Real stories from brides, grooms, and families across Khurram Nagar, Indira Nagar, and Mahanagar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-amber-300 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#C59B27] mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <FiStar key={i} className="fill-[#C59B27] text-xs" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-100">
                <h4 className="font-display text-sm font-bold text-slate-900">
                  {rev.name}
                </h4>
                <div className="text-[11px] text-[#A37B19] font-medium">{rev.service}</div>
                <div className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1 font-medium">
                  <FiMapPin className="text-[9px]" /> {rev.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
