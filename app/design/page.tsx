"use client";

import { useState } from "react";
import { NotesSection } from "@/components/notes-section";
import { BottleSelector } from "@/components/bottle-selector";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useStore } from "@/store/useStore";
import Image from "next/image";

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

const extractNoteIngredients = (ingredients: any) => {
  return ingredients.map((item: any) => ({
    name: item.name,
    percentage: item.percentage,
  }));
};

export default function DesignPage() {
  const { userInput, suggestedIngredients } = useStore();
  const [selectedBottle, setSelectedBottle] = useState("bottle1");
  const [label, setLabel] = useState("");

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
                title={item.note}
                notes={extractNoteIngredients(item.ingredients)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <BottleSelector
            options={bottleOptions}
            selectedBottle={selectedBottle}
            onSelect={setSelectedBottle}
          />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Add your label</h2>
            <Textarea
              placeholder="Enter your custom label text..."
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Final product</h2>
            <div className="aspect-square relative bg-muted rounded-lg p-8 flex items-center justify-center">
              <BottleIcon />
              {label && (
                <div className="absolute bottom-8 left-0 right-0 text-center px-4">
                  <p className="text-sm font-medium truncate">{label}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-12">
        <Button variant="outline">Save Draft</Button>
        <Button>Continue to Summary</Button>
      </div>
    </main>
  );
}
