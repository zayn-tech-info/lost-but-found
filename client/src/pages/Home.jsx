import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import { HowItWorks } from "../components/Howitworks";
import { RecentItems } from "@/components/Recentitems";
import { WhyUsePlatform } from "@/components/WhyUsePlatform";
import { Categories } from "@/components/Categories";
import { SafetySection } from "@/components/Safety";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Herosection />
      <HowItWorks />
      <RecentItems />
      <WhyUsePlatform />
      <Categories />
      <SafetySection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
