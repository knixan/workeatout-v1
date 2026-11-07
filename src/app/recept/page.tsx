import type { Metadata } from "next";
import RecipeBrowser from "@/components/recipes/RecipeBrowser";
import Footer from "@/components/site/Footer";
import InfoDetails from "@/components/site/InfoDetails";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import {
  recipeCategories,
  recipeNutritionNote,
  recipeReadingGuide,
  recipes,
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
          subtitle="Näringsrika och goda måltider för hela dagen"
        />

        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="mx-auto mb-8 max-w-3xl">
            <InfoDetails
              title="Så läser du recepten"
              paragraphs={recipeReadingGuide}
            />
          </div>

          <RecipeBrowser recipes={recipes} initialCategory={initialCategory} />

          <aside className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed">
            <h2 className="font-heading font-semibold text-sage">
              Bra att känna till
            </h2>
            <p className="mt-2">{recipeNutritionNote}</p>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
