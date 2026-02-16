import { MainHero } from "@/components/home/MainHero";
import { HeroSlider } from "@/components/home/HeroSlider";
import { QuickLinks } from "@/components/home/QuickLinks";
import { StudyAdmission } from "@/components/home/StudyAdmission";
import { ResearchSection } from "@/components/home/ResearchSection";
import { Achievements } from "@/components/home/Achievements";
import { LatestNews } from "@/components/home/LatestNews";
import { VcMessage } from "@/components/home/VcMessage";
import { Notices } from "@/components/home/Notices";

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg.jpg')" }}
    >
      <MainHero />
      <HeroSlider />
      <QuickLinks />
      <StudyAdmission />
      <ResearchSection />
      <Achievements />
      <LatestNews />
      <VcMessage />
      <Notices />
    </main>
  );
}
