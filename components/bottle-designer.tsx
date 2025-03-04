import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { BottleSelector } from "@/components/bottle-selector";
import { useStore } from "@/store/useStore";

const BottleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-12 h-12"
  >
    <path
      d="M8 2h8m-8 0v3m8-3v3M6 5h12l-1 15H7L6 5z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const bottleOptions = [
  { id: "bottle1", name: "Classic", icon: <BottleIcon /> },
  { id: "bottle2", name: "Modern", icon: <BottleIcon /> },
  { id: "bottle3", name: "Vintage", icon: <BottleIcon /> },
];

const BottleDesigner = () => {
  const { setBottleDesign } = useStore();
  const [selectedBottle, setSelectedBottle] = useState("bottle1");
  const [label, setLabel] = useState("");

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
        {/* <div className="aspect-square relative bg-muted rounded-lg p-8 flex items-center justify-center">
          <BottleIcon />
          {label && (
            <div className="absolute bottom-8 left-0 right-0 text-center px-4">
              <p className="text-sm font-medium truncate">{label}</p>
            </div>
          )}
        </div> */}
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
