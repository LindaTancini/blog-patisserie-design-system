//Importazioni
import "./Badge.css";

// Definizione del tipo delle proprietà accettate dal componente Badge
export type BadgeProps = {
  label: string;
  arialabel?: string;
  variant?: "default" | "new" | "gluten-free" | "popular";
  style?: React.CSSProperties;
};

// Definizione del componente Badge come funzione React
export function Badge({ label, style }: BadgeProps) {
  return (
    <span className="badge" style={style}>
      {label} {/* Contenuto testuale del badge */}
      <span className="sr-only">{` Badge: ${label} `}</span>
      {/* Testo alternativo per screen reader */}
    </span>
  );
}
