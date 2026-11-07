"use client";

import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import Chip from "@/components/site/Chip";
import {
  recipeCategories,
  type Recipe,
  type RecipeCategory,
} from "@/data/recipes";
import RecipeListCard from "./RecipeListCard";

type RecipeBrowserProps = {
  recipes: Recipe[];
  initialCategory?: RecipeCategory;
};

function matchesSearch(recipe: Recipe, words: string[]) {
  const text = [recipe.title, ...recipe.ingredients]
    .join(" ")
    .toLocaleLowerCase("sv");
  return words.every((word) => text.includes(word));
}

export default function RecipeBrowser({
  recipes,
  initialCategory,
}: RecipeBrowserProps) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<RecipeCategory[]>(
    initialCategory ? [initialCategory] : [],
  );

  const words = search.toLocaleLowerCase("sv").split(/\s+/).filter(Boolean);
  const visibleRecipes = recipes.filter(
    (recipe) =>
      (selected.length === 0 || selected.includes(recipe.category)) &&
      matchesSearch(recipe, words),
  );

  function toggleCategory(category: RecipeCategory) {
    setSelected((current) =>
      current.includes(category)
        ? current.filter((id) => id !== category)
        : [...current, category],
    );
  }

  return (
    <>
      <div className="relative mx-auto max-w-xl">
        <LuSearch
          aria-hidden
          className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-sage"
        />
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Sök på recept eller ingrediens"
          aria-label="Sök recept"
          className="w-full rounded-full border border-sage/40 bg-white py-3 pr-4 pl-12 text-forest placeholder:text-sage focus:border-sage focus:outline-none"
        />
      </div>

      <div
        role="group"
        aria-label="Filtrera på måltid"
        className="mt-5 flex flex-wrap justify-center gap-2"
      >
        <Chip selected={selected.length === 0} onClick={() => setSelected([])}>
          Alla
        </Chip>
        {recipeCategories.map(({ id, label }) => (
          <Chip
            key={id}
            selected={selected.includes(id)}
            onClick={() => toggleCategory(id)}
          >
            {label}
          </Chip>
        ))}
      </div>

      <p aria-live="polite" className="mt-6 text-center text-sm text-forest">
        {visibleRecipes.length} recept
      </p>

      {visibleRecipes.length > 0 ? (
        <div className="mt-4 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleRecipes.map((recipe) => (
            <RecipeListCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-center text-forest">
          Inga recept matchar din sökning.
        </p>
      )}
    </>
  );
}
