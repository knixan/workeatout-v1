import Hero from "@/components/landing/Hero";
import RecipesSection from "@/components/landing/RecipesSection";
import TrainingSection from "@/components/landing/TrainingSection";
import Footer from "@/components/site/Footer";
import Navbar from "@/components/site/Navbar";

export default function Home() {
  return (
    <>
      <Navbar current="/" />
      <main className="flex-1">
        <Hero />
        <RecipesSection />
        <TrainingSection />
      </main>
      <Footer />
    </>
  );
}
