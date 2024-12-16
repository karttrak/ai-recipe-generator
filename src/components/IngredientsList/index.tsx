import './styles.css';

export default function IngredientsList(props: any) {
  const ingredientsListItems = props.ingredients.map((ingredient: string) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  return (
    <section className="ingredients-container">
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list">{ingredientsListItems}</ul>

      {props.ingredients.length >= 4 ? (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from master chef Claude</p>
          </div>
          <button onClick={props.generateRecipe}>Get recipe</button>
        </div>
      ) : null}
    </section>
  );
}
