// Importazioni dei tipi e del componente
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../components/Button/Button";
import type { ButtonProps } from "../components/Button/Button";

// Configurazione principale della "storia" del componente Button
const meta: Meta<typeof Button> = {
  title: "Atoms/Button", // Nome e percorso del componente nella sidebar di Storybook
  component: Button, // Il componente che verrà mostrato in Storybook
  tags: ["autodocs"], // Attiva la generazione automatica della documentazione
  argTypes: {
    // Definizione dei controlli interattivi per modificare le props in Storybook
    label: { control: "text" }, // Campo di testo per la prop "label"
    disabled: { control: "boolean" }, // Toggle per disabilitare/abilitare il bottone
    arialabel: { control: "text" }, // Campo di testo per l'aria-label
    size: {
      control: { type: "radio" }, // Scelta tramite radio button
      options: ["small", "medium", "large"],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Il componente Button è un componente UI che supporta gli stati `hover`, `focus`, `disabled`, è accessibile via `aria-label`, e può essere riutilizzato nel design system.", // Descrizione del componente nella documentazione
      },
    },
    layout: "centered",
  },
};

// Tipizzazione delle storie del componente
export default meta;
type Story = StoryObj<ButtonProps>;

// Storia di default del Button
export const Default: Story = {
  args: {
    label: "Button",
    disabled: false,
    arialabel: "Button",
    icon: "book-open",
    onClick: () => console.log("Hai cliccato il bottone!"),
  },
};

// Storia del bottone disabilitato
export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    disabled: true,
    arialabel: "Disabled Button",
    icon: "book-open",
  },
};

// Storia del bottone small
export const Small: Story = {
  args: {
    label: "Small Button",
    size: "small",
    icon: "book-open",
    onClick: () => console.log("Hai cliccato il bottone small!"),
  },
};

// Storia del bottone medium
export const Medium: Story = {
  args: {
    label: "Medium Button",
    size: "medium",
    icon: "book-open",
    onClick: () => console.log("Hai cliccato il bottone medium!"),
  },
};

// Storia del bottone large
export const Large: Story = {
  args: {
    label: "Large Button",
    size: "large",
    icon: "book-open",
    onClick: () => console.log("Hai cliccato il bottone large!"),
  },
};
