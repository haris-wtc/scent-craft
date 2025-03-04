import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { BottleSelector } from "@/components/bottle-selector";
import BottleIcon from "@/components/bottle-icon";
import { useStore } from "@/store/useStore";

const bottleOptions = [
  { id: "bottle1", name: "Classic", icon: <BottleIcon /> },
  { id: "bottle2", name: "Modern", icon: <BottleIcon /> },
  { id: "bottle3", name: "Vintage", icon: <BottleIcon /> },
];

const BottleDesigner = () => {
  const { bottleDesign, setBottleDesign } = useStore();
  const [selectedBottle, setSelectedBottle] = useState<string>(
    bottleDesign.choice || bottleOptions[0].id
  );
  const [label, setLabel] = useState<string>(bottleDesign.text);

  useEffect(() => {
    setBottleDesign({ choice: selectedBottle, text: label });
  }, [selectedBottle, label]);

  return (
    <div className="space-y-12">
      <BottleSelector
        options={bottleOptions}
        selectedBottle={selectedBottle}
        onSelect={setSelectedBottle}
      />

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Add your label</h2>
        <Input
          placeholder="Enter your custom label text..."
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Final product</h2>
        <div className="grid grid-cols-3 gap-4">
          <button className={"p-4 rounded-lg border-2 transition-colors"}>
            <div className="aspect-square relative flex items-center justify-center">
              <BottleIcon />
            </div>
            <p className="text-sm text-center mt-2">
              {label ? label : "Your label"}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default BottleDesigner;
