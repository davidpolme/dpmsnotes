import Header from "@/components/Header";
import Items from "@/components/Items";
import Footer from "@/components/Footer";
import {
  footerData,
  headerLinks,
  itemsData,
  welcomeData,
} from "@/data/content";

export default function HomePage() {
  return (
    <>
      <Header links={headerLinks} />
      <Items data={itemsData} columns={3} />
      <Footer about={footerData.about} social={footerData.social} />
    </>
  );
}
