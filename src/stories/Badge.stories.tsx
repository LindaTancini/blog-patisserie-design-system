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
      options: ["Default", "Novità", "Senza Glutine", "Popolare"], // Opzioni disponibili
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
    label: "Default Badge",
    arialabel: "Default Badge",
    variant: "default",
    style: { position: "static" },
  },
};
// Storia di un badge di un prodotto nuovo
export const New: Story = {
  args: {
    label: "New",
    arialabel: "New",
    variant: "new",
    style: { position: "static" },
  },
};

// Storia di un badge di un prodotto senza glutine
export const GlutenFree: Story = {
  args: {
    label: "Gluten Free",
    arialabel: "Gluten Free",
    variant: "gluten-free",
    style: { position: "static" },
  },
};

// Storia di un badge di un prodotto popolare
export const Popular: Story = {
  args: {
    label: "Popular",
    arialabel: "Popular",
    variant: "popular",
    style: { position: "static" },
  },
};
