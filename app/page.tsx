import Items from "@/components/Items";
import { sectionsData } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <Items data={sectionsData} columns={3} />
    </>
  );
}
