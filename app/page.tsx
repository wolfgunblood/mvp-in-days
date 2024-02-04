import Hero from "@/components/Hero";
import WorkPage from "@/components/WorkPage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-40 mb-0">
      <Hero />
      <WorkPage />
    </main>
  );
}
