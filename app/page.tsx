import ActionPage from "@/components/Action";
import Hero from "@/components/Hero";
import OfferingPage from "@/components/OfferingPage";
import PricingPage from "@/components/Pricing";
import TechStackPage from "@/components/TechStack";
import WorkPage from "@/components/WorkPage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-40 mb-0">
      <Hero />
      <WorkPage />
      <OfferingPage />
      <TechStackPage />
      <PricingPage />
      <ActionPage />
    </main>
  );
}
