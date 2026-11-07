import type { Metadata } from "next";
import RecipeBrowser from "@/components/recipes/RecipeBrowser";
import Footer from "@/components/site/Footer";
import InfoDetails from "@/components/site/InfoDetails";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import {
  recipeCategories,
  recipeGuides,
  recipes,
  recipeUsageGuide,
} from "@/data/recipes";

export const metadata: Metadata = {
  title: "Recept | Workeatout!",
  description:
    "Näringsrika recept till frukost, mellanmål, lunch, middag och kvällsmat.",
};

export default async function RecipesPage({
  searchParams,
}: PageProps<"/recept">) {
  const { kategori } = await searchParams;
  const initialCategory = recipeCategories.find(
    ({ id }) => id === kategori,
  )?.id;

  return (
    <>
      <Navbar current="/recept" />
      <main className="flex-1 bg-surface">
        <PageHeader
          title="Recept"
          subtitle="Proteinrika recept med kcal, såser och mer smak"
        />

        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="mx-auto mb-8 max-w-3xl">
            <InfoDetails {...recipeUsageGuide} />
          </div>

          <RecipeBrowser recipes={recipes} initialCategory={initialCategory} />

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {recipeGuides.map((guide) => (
              <InfoDetails key={guide.title} {...guide} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
