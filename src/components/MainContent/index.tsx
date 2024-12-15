import React from 'react';

import IngredientsList from '@/components/IngredientsList';
import Recipe from '@/components/Recipe';

import './styles.css';

export default function MainContent() {
  const [ingredients, setIngredients] = React.useState([
    'thyme',
    'lemons',
    'chicken',
    'skewers',
  ]);

  function addIngredient(formData: FormData) {
    const newIngredient: string = formData.get('ingredient').trim() ?? '';
    if (newIngredient.length == 0 || ingredients.includes(newIngredient)) {
      return;
    }
    setIngredients((prev: string) => [...prev, newIngredient]);
  }

  return (
    <main>
      <h1>AI Recipe Generator</h1>

      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. Oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      <IngredientsList ingredients={ingredients} />

      <Recipe />
    </main>
  );
}
