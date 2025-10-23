//Importazioni
import { faBookOpen, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Button.css";

// Definizione del tipo delle proprietà accettate dal componente Button
export type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  arialabel?: string;
  size?: "small" | "medium" | "large";
  icon?: "book-open" | "arrow-left";
};

// Definizione del componente Button come funzione React
export function Button({
  label,
  disabled = false,
  onClick,
  arialabel,
  size = "medium",
  icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick} // Associa la funzione onClick
      disabled={disabled} // Applica lo stato disabilitato se true
      aria-label={arialabel || label} // Aggiunge etichetta accessibile per screen reader
      className={`pink-btn pink-btn-${size}`} // Classe dinamica in base alla dimensione
    >
      {icon === "book-open" && (
        <FontAwesomeIcon
          icon={faBookOpen}
          aria-hidden="true"
          aria-label="Mostra ingredienti"
        />
      )}
      {icon === "arrow-left" && (
        <FontAwesomeIcon
          icon={faArrowLeft}
          aria-hidden="true"
          aria-label="Torna indietro"
        />
      )}
      <span className="button-text">{label}</span>
    </button>
  );
}
