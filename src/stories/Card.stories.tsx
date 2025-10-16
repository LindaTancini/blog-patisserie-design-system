// Importazioni
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "../components/Card/Card";
import cupcake from "../assets/cupcake.png";
import biscotto from "../assets/biscotto.png";

// Configurazione principale della "storia" del componente Card
const meta: Meta<typeof Card> = {
  title: "Molecules/Card", // Nome e percorso del componente nella sidebar di Storybook
  component: Card, // Il componente che verrà mostrato in Storybook
  tags: ["autodocs"], // Attiva la generazione automatica della documentazione
  argTypes: {
    // Definizione dei controlli interattivi per modificare le props in Storybook
    image: { control: "text" }, // Campo di testo per la prop "image"
    new: { control: "text" }, // Campo di testo per la prop "new"
    glutenfree: { control: "text" }, // Campo di testo per la prop "glutenfree"
    title: { control: "text" }, // Campo di testo per la prop "title"
    description: { control: "text" }, // Campo di testo per la prop "description"
    onClick: { action: "onClick clicked" }, // Aggiunge un'azione per il click sul bottone
  },
  parameters: {
    docs: {
      description: {
        component:
          "Il componente `ProductCard` rappresenta una scheda prodotto completa di immagine, titolo, prezzo e descrizione del prodotto. " +
          "Supporta badge per novità e se il prodotto è Gluten free, ed è progettato per essere accessibile e facilmente integrabile in un design system.",
      },
    },
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

// Storia della Card con cupcake
export const Cupcake: Story = {
  args: {
    image: cupcake,
    new: "New",
    title: "Cupcake alla fragola",
    description:
      "Un cupcake leggero e soffice sormontato da una cremosa glassa alla fragola",
    onClick: () => console.log("Hai cliccato la Card del Cupcake!"),
  },
};

// Storia della Card con biscotto
export const Biscuit: Story = {
  args: {
    image: biscotto,
    glutenfree: "Gluten Free",
    title: "Biscotto al cioccolato",
    description:
      "Un biscotto croccante e friabile con deliziose gocce di cioccolato fondente",
    onClick: () => console.log("Hai cliccato la Card del Biscotto!"),
  },
};
