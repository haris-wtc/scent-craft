import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Ingredient {
  name: string;
  description: string;
  reason: string;
}

interface UserInput {
  text?: string;
  image?: string | null;
}

interface BottleDesign {
  choice: number;
  text: string;
}

interface PerfumeSuggestion {
  note: "top" | "middle" | "base",
  ingredients: Ingredient[]
}

interface PerfumeState {
  // step 1
  userInput: UserInput;
  setUserInput: (data: UserInput) => void;
  suggestedIngredients: PerfumeSuggestion[];
  setSuggestedIngredients: (ingredients: PerfumeSuggestion[]) => void;

  // step 2
  bottleDesign: BottleDesign;
  setBottleDesign: (data: BottleDesign) => void;

  hasIngredients: () => boolean;
  hasBottleDesign: () => boolean;
  reset: () => void;
}

const initialState = {
  userInput: { text: "", image: "" },
  suggestedIngredients: [],
  bottleDesign: { choice: 0, text: "" },
};

export const useStore = create<PerfumeState>()(
  persist(
    (set, get) => ({
      userInput: { text: "", image: "" },
      setUserInput: (data) =>
        set({ userInput: { text: data.text ?? "", image: data.image ?? "" } }),
      suggestedIngredients: [],
      setSuggestedIngredients: (ingredients) =>
        set({ suggestedIngredients: ingredients }),
      bottleDesign: { choice: 0, text: "" },
      setBottleDesign: (data) =>
        set({
          bottleDesign: { choice: data.choice ?? 0, text: data.text ?? "" },
        }),
      hasIngredients: () => !!get().suggestedIngredients.length,
      hasBottleDesign: () => !!get().bottleDesign.text,
      reset: () => {
        set(initialState);
      },
    }),
    {
      name: "perfume-storage",
    }
  )
);
