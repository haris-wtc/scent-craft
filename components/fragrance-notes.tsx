import BottleIcon from "@/components/bottle-icon";
import { useStore } from "@/store/useStore";

export function FragranceNotes() {
  const { suggestedIngredients, bottleDesign } = useStore();

  return (
    <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border mb-8">
      <div className="grid md:grid-cols-2 gap-8">
        <button className={"p-4 rounded-lg border-2 transition-colors"}>
          <div className="aspect-square relative flex items-center justify-center">
            <BottleIcon />
          </div>
          <p className="text-sm text-center mt-2">{bottleDesign.text}</p>
        </button>

        <div>
          <h2 className="text-xl font-bold mb-4">Fragrance Notes</h2>

          <div className="space-y-4">
            {suggestedIngredients.map((note) => (
              <div key={note.note}>
                <h3 className="font-medium capitalize">{note.note} Notes</h3>
                <p className="text-muted-foreground">
                  {note.ingredients
                    .map((ingredient) => ingredient.name)
                    .join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
