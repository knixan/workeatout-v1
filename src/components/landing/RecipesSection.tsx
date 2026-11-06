import { LuSalad } from "react-icons/lu";
import RecipeCard from "./RecipeCard";
import SectionHeading from "./SectionHeading";

const recipes = [
  {
    title: "Frukost",
    description: "Energi för en bra start på dagen.",
    image: "/maltider/frukost.png",
    imageAlt: "Smoothiebowl med kiwi, jordgubbar, banan och pumpafrön",
  },
  {
    title: "Mellanmål",
    description: "Smarta mellanmål som håller dig på topp.",
    image: "/maltider/mellanmal.png",
    imageAlt: "Overnight oats i glasburk toppad med hallon",
  },
  {
    title: "Lunch/Middag",
    description: "Mättande och balanserande huvudmåltider",
    image: "/maltider/middag-lunch.png",
    imageAlt: "Skål med grillad kyckling, quinoa, avokado och gurka",
  },
  {
    title: "Kvällsmat",
    description: "Lätta och näringsrika måltider för en god natts sömn",
    image: "/maltider/kvallsmat.png",
    imageAlt: "Omelettrullar med kalkon och spenat",
  },
];

export default function RecipesSection() {
  return (
    <section id="maltider" className="scroll-mt-8 bg-surface px-6 py-12">
      <SectionHeading
        icon={LuSalad}
        title="Hälsosamma recept"
        subtitle="Näringsrika och goda måltider för hela dagen"
      />
      <div className="mx-auto mt-8 grid max-w-5xl gap-8 sm:grid-cols-2 lg:gap-12">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.title} {...recipe} />
        ))}
      </div>
    </section>
  );
}
