// Importazioni
import "./Card.css";
import { Button } from "../Button/Button";

// Definizione del tipo delle proprietà accettate dal componente CardBack
export type CardBackProps = {
  title: string;
  ingredients: string[];
};

// Definizione del componente CardBack come funzione React
export function CardBack({ title, ingredients }: CardBackProps) {
  return (
    <article className="card-back" aria-label={`Ingredienti di ${title}`}>
      <div className="card-content">
        <h4 className="card-title">Ingredienti</h4>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <Button label="Torna indietro" size="medium" icon="arrow-left" />
      </div>
    </article>
  );
}
