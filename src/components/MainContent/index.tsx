import React from 'react';

import IngredientsList from '@/components/IngredientsList';
import Recipe from '@/components/Recipe';

import { getRecipeFromMistral } from "@/ai.ts"

import './styles.css';

export default function MainContent() {
  const [ingredients, setIngredients] = React.useState<string[]>([]);

  const [recipe, setRecipe] = React.useState("")

  function addIngredient(formData: FormData) {
    const newIngredient: string = formData.get('ingredient')?.toString().trim() ?? '';
    if (newIngredient.length == 0 || ingredients.includes(newIngredient)) {
      return;
    }
    setIngredients((prev: string[]) => [...prev, newIngredient]);
  }

  async function generateRecipe() {
    const recipeMarkdown: string = await getRecipeFromMistral(ingredients) ?? ''
    setRecipe(recipeMarkdown)
  }

  return (
    <main>
      <h2>What ingredients do you have to use?</h2>

      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. Oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add ingredient</button>
      </form>

      {ingredients.length > 0 ? (
        <IngredientsList ingredients={ingredients} generateRecipe={generateRecipe} />
      ) : null}

      {recipe ? (
        <Recipe recipe={recipe} />
      ) : null}
      
      </main>
  );
}
