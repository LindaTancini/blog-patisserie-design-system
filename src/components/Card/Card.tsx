// Importazioni
import React from "react";
import "./Card.css";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";

// Definizione del tipo delle proprietà accettate dal componente Card
export type CardProps = {
  image: string;
  new?: string;
  popular?: string;
  glutenfree?: string;
  title: string;
  description: string;
  ingredients?: string[];
};

// Definizione del componente Card come funzione React
export function Card({
  image,
  new: isNew,
  glutenfree,
  popular,
  title,
  description,
  ingredients = [],
}: CardProps) {
  // Definisco lo stato con useState per girare la card al click
  const [isFlipped, setIsFlipped] = React.useState(false);
  // Funzione per gestire il click
  const handleChange = () => setIsFlipped((prev) => !prev);
  // Struttura della Card
  return (
    <article
      className={`card-container ${isFlipped ? "is-flipped" : ""}`}
      aria-label={`Prodotto: ${title}, ${description}`}
    >
      <div className="card-inner">
        {/* FRONT */}
        <div className="card-front">
          {/* Immagine */}
          <figure className="card-image">
            <img src={image} alt={`Immagine di ${title}`} />
            {/* Badges */}
            {isNew && <Badge label={isNew} variant="new" />}
            {glutenfree && <Badge label="Gluten Free" variant="gluten-free" />}
            {popular && <Badge label={popular} variant="popular" />}
          </figure>
          {/* Contenuto della Card */}
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
          </div>
          {/* Footer della Card con Bottone */}
          <div className="card-footer">
            <Button
              label="Visualizza ingredienti"
              arialabel={`Visualizza ingredienti di ${title}`}
              size="medium"
              onClick={handleChange}
            />
          </div>
        </div>

        {/* BACK */}
        <div className="card-back">
          <h4>Ingredienti</h4>
          <ul>
            {/* Mappiamo gli ingredienti */}
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {/* Footer della Card con Bottone */}
          <div className="card-footer">
            <Button
              label="Torna indietro"
              arialabel={`Torna alla descrizione di ${title}`}
              size="medium"
              onClick={handleChange}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
