import type { Metadata } from "next";
import Footer from "@/components/site/Footer";
import InfoDetails from "@/components/site/InfoDetails";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import TrainingBrowser from "@/components/training/TrainingBrowser";
import {
  trainingForms,
  trainingGuides,
  trainingIntroGuide,
  trainingNote,
  trainingPrograms,
} from "@/data/training";

export const metadata: Metadata = {
  title: "Träning | Workeatout!",
  description:
    "9 träningsupplägg för styrka, muskler, former och kondition – 3, 4 eller 5 dagar i veckan.",
};

export default async function TrainingPage({
  searchParams,
}: PageProps<"/traning">) {
  const { form } = await searchParams;
  const initialForm =
    trainingForms.find(({ id }) => id === form)?.id ?? trainingForms[0].id;

  return (
    <>
      <Navbar current="/traning" />
      <main className="flex-1 bg-surface">
        <PageHeader
          title="Träning"
          subtitle="9 upplägg för styrka, muskler, former och kondition"
        />

        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="mx-auto mb-8 max-w-3xl">
            <InfoDetails {...trainingIntroGuide} />
          </div>

          <TrainingBrowser
            programs={trainingPrograms}
            initialForm={initialForm}
          />

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {trainingGuides.map((guide) => (
              <InfoDetails key={guide.title} {...guide} />
            ))}
          </div>

          <p className="mt-8 text-center text-sm">{trainingNote}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
