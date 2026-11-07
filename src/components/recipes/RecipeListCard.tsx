import { LuChevronDown } from "react-icons/lu";
import { recipeCategories, recipeKcal, type Recipe } from "@/data/recipes";

type RecipeListCardProps = {
  recipe: Recipe;
};

export default function RecipeListCard({ recipe }: RecipeListCardProps) {
  const { title, category, ingredients, instructions, nutrition } = recipe;
  const categoryLabel = recipeCategories.find(({ id }) => id === category)?.label;

  const macros = [
    { label: "Protein", value: nutrition.protein },
    { label: "Kolhydrater", value: nutrition.carbs },
    { label: "Fett", value: nutrition.fat },
  ];

  return (
    <article className="rounded-2xl bg-white p-5 shadow-md">
      <p className="font-heading text-xs font-semibold text-lime uppercase">
        {categoryLabel}
      </p>
      <h2 className="mt-1 font-heading text-lg leading-snug font-semibold text-forest">
        {title}
      </h2>

      <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="col-span-3 rounded-lg bg-surface px-1 py-2">
          <dd className="font-heading text-base font-semibold text-pink">
            ca {recipeKcal(nutrition)} kcal
          </dd>
          <dt className="text-xs text-forest">Kalorier per portion</dt>
        </div>
        {macros.map(({ label, value }) => (
          <div key={label} className="rounded-lg bg-surface px-1 py-2">
            <dd className="font-heading text-sm font-semibold text-sage">
              ca {value} g
            </dd>
            <dt className="text-xs text-forest">{label}</dt>
          </div>
        ))}
      </dl>

      <details className="group mt-4">
        <summary className="flex cursor-pointer list-none items-center justify-between font-heading text-sm font-semibold text-pink [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">Visa recept</span>
          <span className="hidden group-open:inline">Dölj recept</span>
          <LuChevronDown
            aria-hidden
            className="size-5 transition-transform group-open:rotate-180"
          />
        </summary>

        <h3 className="mt-4 font-heading text-sm font-semibold text-sage">
          Innehåll
        </h3>
        <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>

        <h3 className="mt-4 font-heading text-sm font-semibold text-sage">
          Gör så här
        </h3>
        <p className="mt-1 text-sm leading-relaxed">{instructions}</p>
      </details>
    </article>
  );
}
