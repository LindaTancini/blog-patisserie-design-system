// Importazioni
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, BadgeProps } from "../components/Badge/Badge";

// Configurazione principale della "storia" del componente Badge
const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge", // Nome e percorso del componente nella sidebar di Storybook
  component: Badge, // Il componente che verrà mostrato in Storybook
  tags: ["autodocs"], // Attiva la generazione automatica della documentazione
  argTypes: {
    // Definizione dei controlli interattivi per modificare le props in Storybook
    label: { control: "text" }, // Campo di testo per la prop "label"
    arialabel: { control: "text" }, // Campo di testo per l'aria-label
    variant: {
      control: { type: "radio" }, // Scelta tramite radio button
      options: ["Default", "Novità", "Senza Glutine"], // Opzioni disponibili
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Il componente Badge è utilizzato per evidenziare informazioni importanti come novità o caratteristiche speciali di un prodotto. Può essere personalizzato tramite diverse varianti e stili.",
      },
    },
    layout: "centered",
  },
};

// Tipizzazione delle storie del componente
export default meta;
type Story = StoryObj<BadgeProps>;
// Storia di default del Badge
export const Default: Story = {
  args: {
    label: "Default Badge", // Testo del badge
    arialabel: "Default Badge", // Aria-label per l’accessibilità
    variant: "default", // Variante di default
    style: { position: "static" }, // Stile per evitare problemi di posizionamento in Storybook
  },
};
// Storia di un badge di sconto
export const New: Story = {
  args: {
    label: "New", // Testo del badge
    arialabel: "New", // Aria-label per l’accessibilità
    variant: "new", // Variante di sconto
    style: { position: "static" }, // Stile per evitare problemi di posizionamento in Storybook
  },
};
// Storia di un badge di esaurito
export const GlutenFree: Story = {
  args: {
    label: "Gluten Free", // Testo del badge
    arialabel: "Gluten Free", // Aria-label per l’accessibilità
    variant: "gluten-free", // Variante di esaurito
    style: { position: "static" }, // Stile per evitare problemi di posizionamento in Storybook
  },
};
