"use client";

import type React from "react";
import { useState, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Upload, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useStore } from "@/store/useStore";
import { scenario } from "@/config";

export default function PerfumeSuggester() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [files, setFiles] = useState<FileList | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { toast } = useToast();
  const { setSuggestedIngredients, setUserInput } = useStore();

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setInput,
    status,
  } = useChat({
    initialMessages: [
      {
        id: "system-1",
        role: "system",
        content: scenario,
      },
    ],
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(e.target.files);
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetImage = () => {
    setImagePreview(null);
    setFiles(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  /*  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedInput = input.trim();

    console.log("input", trimmedInput);
    console.log("files", files);

    if (!trimmedInput && !files) {
      setInput("");
      return;
    }

    handleSubmit(e, {
      experimental_attachments: files,
      allowEmptySubmit: true,
    });

    // Reset the UI state
    resetImage();
    setInput("");
    if (
      e.target &&
      "reset" in e.target &&
      typeof e.target.reset === "function"
    ) {
      e.target.reset();
    }
  }; */

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/mock-data", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const { messages } = await response.json();

        const lastAiMessage = messages
          .filter((message: any) => message.role === "assistant")
          .pop();

        if (lastAiMessage) {
          const suggestedIngredients = JSON.parse(lastAiMessage.content);

          // success response
          if (
            Array.isArray(suggestedIngredients) &&
            suggestedIngredients.length
          ) {
            setSuggestedIngredients(suggestedIngredients);
            setUserInput({ text: input, image: imagePreview });

            // Reset the UI state
            resetImage();
            setInput("");
            if (
              e.target &&
              "reset" in e.target &&
              typeof e.target.reset === "function"
            ) {
              e.target.reset();
            }

            router.push("/design");
          }

          // insufficent input
          else {
            toast({
              title: "Insufficient data",
              description:
                "Please check the provided input and try to be as precise as possible.",
              variant: "destructive",
            });
          }
        }
      } else {
        toast({
          title: "Error fetching mock data",
          description: "Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  // Get the last AI message for display
  /* const lastAiMessage = messages
    .filter((message) => message.role === "assistant")
    .pop(); */

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div className="relative">
        <Input
          placeholder="Describe a scene, mood, or memory for your perfect fragrance..."
          value={input}
          onChange={handleInputChange}
          className="pr-20"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          {imagePreview ? (
            <div className="relative w-8 h-8">
              <Image
                src={imagePreview || "/placeholder.svg"}
                alt="Preview"
                fill
                className="object-cover rounded-md"
              />
              <button
                type="button"
                onClick={resetImage}
                className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-md"
              >
                <X className="h-3 w-3 text-gray-600" />
              </button>
            </div>
          ) : (
            <label htmlFor="image-upload" className="cursor-pointer">
              <Upload className="h-5 w-5 text-muted-foreground" />
            </label>
          )}
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
            ref={fileInputRef}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isLoading || (!input && !files)}
      >
        <Sparkles className="mr-2 h-4 w-4" />
        {isLoading ? "Crafting suggestions..." : "Suggest Ingredients"}
      </Button>
    </form>
  );
}
