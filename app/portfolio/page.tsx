import Items from "@/components/Items";

import { portfolioProjects } from "@/data/content";

export default function Portfolio() {
  return (
    <main className="p-8">
      <Items data={portfolioProjects} columns={3} />
    </main>
  );
}
