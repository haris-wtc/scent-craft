"use client";

import Image from "next/image";
import { NotesSection } from "@/components/notes-section";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import BottleDesigner from "@/components/bottle-designer";
import { useRouter } from "next/navigation";

const extractNoteIngredients = (ingredients: any) => {
  return ingredients.map((item: any) => ({
    name: item.name,
    percentage: item.percentage,
  }));
};

export default function DesignPage() {
  const router = useRouter();
  const { userInput, suggestedIngredients, reset, hasBottleDesign } =
    useStore();

  const onStartOverClickHandler = () => {
    reset();
    router.push("/");
  };

  return (
    <main className="flex-1 container py-8">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Your prompt:</h2>
            {userInput.text && <p>{userInput.text}</p>}
            {userInput.image && (
              <Image
                src={userInput.image}
                width="100"
                height="100"
                alt="user input image"
              />
            )}
          </div>

          <div className="space-y-12">
            {suggestedIngredients.map((item) => (
              <NotesSection
                key={item.note}
                title={item.note}
                notes={extractNoteIngredients(item.ingredients)}
              />
            ))}
          </div>
        </div>

        <BottleDesigner />
      </div>

      <div className="flex justify-end gap-4 mt-12">
        <Button variant="outline" onClick={onStartOverClickHandler}>
          Start over
        </Button>
        <Button
          onClick={() => router.push("/summary")}
          disabled={!hasBottleDesign()}
        >
          Continue to Summary
        </Button>
      </div>
    </main>
  );
}
