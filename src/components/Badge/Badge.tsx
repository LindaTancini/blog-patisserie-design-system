//Importazioni
import "./Badge.css";

// Definizione del tipo delle proprietà accettate dal componente Badge
export type BadgeProps = {
  label: string; // Testo visibile all'interno del badge
  arialabel?: string; // Aria-label per l'accessibilità (opzionale)
  variant?: "default" | "new" | "gluten-free"; // Variante del badge
  style?: React.CSSProperties; // Stili CSS personalizzati (opzionale)
};

// Definizione del componente Badge come funzione React
export function Badge({ label, arialabel, style }: BadgeProps) {
  return (
    <span className="badge" aria-label={arialabel ?? label} style={style}>
      {label} {/* Contenuto testuale del badge */}
      <span className="sr-only">{` Badge: ${label} `}</span>
      {/* Testo alternativo per screen reader */}
    </span>
  );
}
