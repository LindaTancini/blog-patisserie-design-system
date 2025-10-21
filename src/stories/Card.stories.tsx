// Importazioni
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "../components/Card/CardFront";
import cupcake from "../assets/cupcake.png";
import dolcetticocco from "../assets/dolcetti-al-cocco.png";
import cheesecake from "../assets/cheesecake.png";

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
    popular: { control: "text" }, // Campo di testo per la prop "popular"
    title: { control: "text" }, // Campo di testo per la prop "title"
    description: { control: "text" }, // Campo di testo per la prop "description"
  },
  parameters: {
    docs: {
      description: {
        component:
          "Il componente `ProductCard` rappresenta una scheda prodotto completa di immagine, titolo, prezzo e descrizione del prodotto. " +
          "Supporta badge per novità e se il prodotto è Gluten free, ed è progettato per essere accessibile e facilmente integrabile in un design system. " +
          "La card può essere girata per mostrare gli ingredienti del prodotto, offrendo un'interazione coinvolgente per l'utente.",
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
  },
};

// Storia della Card con dolcetti al cocco
export const CoconutSweets: Story = {
  args: {
    image: dolcetticocco,
    glutenfree: "Gluten Free",
    title: "Dolcetti al cocco",
    description:
      "Deliziosi dolcetti fatti con farina di cocco e senza glutine, perfetti per ogni occasione",
  },
};

// Storia della Card con cheesecake
export const Cheesecake: Story = {
  args: {
    image: cheesecake,
    popular: "Popular",
    title: "Cheesecake",
    description:
      "Una cheesecake cremosa con una base croccante di biscotti e un topping di frutti di bosco",
  },
};
