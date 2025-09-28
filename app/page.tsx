import CardGroup from "@/components/CardGroup";
import { sectionsData, heroData } from "@/content/content";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero data={heroData} />
      <CardGroup items={sectionsData} />
    </>
  );
}
