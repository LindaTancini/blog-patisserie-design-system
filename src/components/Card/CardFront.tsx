// Importazioni
import "./Card.css";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";

// Definizione del tipo delle proprietà accettate dal componente Card
export type CardProps = {
  image: string;
  new?: string;
  glutenfree?: string;
  popular?: string;
  title: string;
  description: string;
  onClick?: () => void;
};

// Definizione del componente Card come funzione React
export function Card({
  image,
  new: isNew,
  glutenfree,
  popular,
  title,
  description,
  onClick,
}: CardProps) {
  return (
    <article
      className="card-front"
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

        {/* Badge Popular */}
        {popular && (
          <>
            <Badge label="Popular" variant="popular" />
            <span className="sr-only">Prodotto popolare</span>
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
