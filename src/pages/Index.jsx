
import { Hero } from "@/components/Hero";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HappyCustomers } from "@/components/HappyCustomers";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <HowItWorks />
      <WhyChooseUs />
      <HappyCustomers />
    </div>
  );
};

export default Index;
