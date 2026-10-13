import HeroSection from "../components/home/HeroSection";
import HomeAboutSection from "../components/home/HomeAboutSection";
import HomeServicesSection from "../components/home/HomeServicesSection";
import HomeReviewsSection from "../components/home/HomeReviewsSection";
import HomeBlogsAndCta from "../components/home/HomeBlogsAndCta";

export default function Home({ onOpenBooking }) {
  return (
    <div className="space-y-24 sm:space-y-32">
      <HeroSection onOpenBooking={onOpenBooking} />
      <HomeAboutSection />
      <HomeServicesSection onOpenBooking={onOpenBooking} />
      <HomeReviewsSection />
      <HomeBlogsAndCta onOpenBooking={onOpenBooking} />
    </div>
  );
}
