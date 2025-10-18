//Importazioni
import "./Button.css";

// Definizione del tipo delle proprietà accettate dal componente Button
export type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  arialabel?: string;
  size?: "small" | "medium" | "large";
};

// Definizione del componente Button come funzione React
export function Button({
  label,
  disabled = false,
  onClick,
  arialabel,
  size = "medium",
}: ButtonProps) {
  return (
    <button
      onClick={onClick} // Associa la funzione onClick
      disabled={disabled} // Applica lo stato disabilitato se true
      aria-label={arialabel} // Aggiunge etichetta accessibile per screen reader
      className={`pink-btn pink-btn-${size}`} // Classe dinamica in base alla dimensione
    >
      <span className="button-text">{label}</span>
    </button>
  );
}
