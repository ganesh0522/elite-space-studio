import { Helmet } from "react-helmet-async";

import HeroSection from "./HeroSection";
import ClientCategories from "./ClientCategories";
import ServicesSection from "./ServicesSection";
import FeaturedProjects from "./FeaturedProjects";
import ProcessTimeline from "./ProcessTimeline";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "./CTASection";

const Home = () => {
  return (
    <>
      {/* SEO Meta Tags */}

      <Helmet>
        <title>
          EliteSpace Studio | Luxury Interior Design
        </title>

        <meta
          name="description"
          content="Premium luxury interior design services for residential, commercial, and modern spaces."
        />

        <meta
          name="keywords"
          content="Interior Design, Luxury Design, Architecture, Home Design, Modern Spaces"
        />

        <meta
          name="author"
          content="EliteSpace Studio"
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content="EliteSpace Studio | Luxury Interior Design"
        />

        <meta
          property="og:description"
          content="Crafting elegant spaces for better living with premium interior solutions."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="/logo.svg"
        />
      </Helmet>

      {/* Page Sections */}

      <HeroSection />

      <ClientCategories />

      <ServicesSection />

      <FeaturedProjects />

      <ProcessTimeline />

      <TestimonialsSection />

      <CTASection />
    </>
  );
};

export default Home;