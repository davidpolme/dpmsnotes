import Items from "@/components/Items";
import { sectionsData } from "@/content/content";

export default function HomePage() {
  return (
    <>
      <Items data={sectionsData}  />
    </>
  );
}
