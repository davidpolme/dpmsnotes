import Items from "@/components/Items";
import CardGroup from "@/components/CardGroup";
import { sectionsData } from "@/content/content";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CardGroup items={sectionsData} />
    </>
  );
}
