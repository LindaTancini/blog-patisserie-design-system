// Importazioni
import type { Meta, StoryObj } from "@storybook/react";
import { CardBack } from "../components/Card/CardBack";

// Configurazione principale della "storia" del componente Card
const meta: Meta<typeof CardBack> = {
  title: "Molecules/CardBack", // Nome e percorso del componente nella sidebar di Storybook
  component: CardBack, // Il componente che verrà mostrato in Storybook
  tags: ["autodocs"], // Attiva la generazione automatica della documentazione
  argTypes: {
    // Definizione dei controlli interattivi per modificare le props in Storybook
    title: { control: "text" }, // Campo di testo per la prop "title"
    ingredients: { control: "object" }, // Campo oggetto per la prop "ingredients"
  },
  parameters: {
    docs: {
      description: {
        component:
          "Il componente `CardBack` rappresenta il retro di una scheda prodotto, " +
          "mostrando gli ingredienti del prodotto in modo chiaro e accessibile. " +
          "Include un pulsante per tornare alla visualizzazione frontale della card, " +
          "offrendo un'interazione semplice e intuitiva per l'utente.",
      },
    },
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof CardBack>;

// Storia del retro della card Cupcake dove mostra i suoi ingredienti di preparazione
export const CupcakeBack: Story = {
  args: {
    title: "Cupcake alla fragola",
    ingredients: ["Farina", "Zucchero", "Uova", "Burro", "Fragole"],
  },
};

// Storia del retro della card Coconut Sweet dove mostra i suoi ingredienti di preparazione
export const CoconutSweetsBack: Story = {
  args: {
    title: "Dolcetti al cocco",
    ingredients: ["Farina di cocco", "Albume", "Zucchero"],
  },
};

// Storia del retro della card Cheesecake dove mostra i suoi ingredienti di preparazione
export const CheesecakeBack: Story = {
  args: {
    title: "Dolcetti al cocco",
    ingredients: [
      "Formaggio spalmabile",
      "Biscotti",
      "Burro",
      "Zucchero",
      "Frutti di bosco",
    ],
  },
};
