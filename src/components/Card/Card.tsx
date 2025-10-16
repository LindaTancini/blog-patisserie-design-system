// Importazioni
import "./Card.css";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";

// Definizione del tipo delle proprietà accettate dal componente Card
export type CardProps = {
  image: string; // Immagine del prodotto
  new?: string; // Badge "New" (opzionale)
  glutenfree?: string; // Badge "Gluten Free" (opzionale)
  title: string; // Titolo del prodotto
  description: string; // Mini descrizione del prodotto
  onClick?: () => void; // Funzione callback eseguita al click (opzionale)
};

// Definizione del componente Card come funzione React
export function Card({
  image,
  new: isNew,
  glutenfree,
  title,
  description,
  onClick,
}: CardProps) {
  return (
    <article
      className="card-container"
      aria-label={`Prodotto: ${title}, ${description}`}
    >
      {/* Immagine */}
      <figure className="card-image">
        <img src={image} alt={`Immagine di ${title}`} />

        {/* Badge New */}
        {isNew && (
          <>
            <Badge label={isNew} variant="new" />
            <span className="sr-only">Novità</span>
          </>
        )}

        {/* Badge Glutenfree */}
        {glutenfree && (
          <>
            <Badge label="Gluten Free" variant="gluten-free" />
            <span className="sr-only">Prodotto senza Glutine</span>
          </>
        )}
      </figure>

      {/* Contenuto */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-desciption">{description}</p>
      </div>

      {/* Footer con bottone */}
      <div className="card-footer">
        <Button
          label={"Visualizza ingredienti"}
          arialabel={onClick ? `Visualizza ingredienti di ${title}` : undefined}
          size="medium"
          onClick={onClick}
        />
      </div>
    </article>
  );
}
