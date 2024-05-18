import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MovingCard from "@/components/MovingCard";
import StickyScrollSection from "@/components/StickyScrollSection";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <StickyScrollSection />
      <MovingCard />
      <UpcomingWebinars />
    </main>
  );
};
export default Home;
