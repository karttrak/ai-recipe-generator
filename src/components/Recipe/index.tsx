import ReactMarkdown from "react-markdown"

import './styles.css';

export default function Recipe(props: any) {
  return (
    <>
      {props.recipe ?
        <section className="recipe-container">
          <h2>Chef Claude Recommends:</h2>
          <ReactMarkdown>
            {props.recipe}
          </ReactMarkdown>
        </section>
      : null}
    </>
  );
}
