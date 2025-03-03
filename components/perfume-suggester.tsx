"use client";

import type React from "react";
import { useState, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upload, Sparkles, X } from "lucide-react";
import Image from "next/image";

export default function PerfumeSuggester() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [files, setFiles] = useState<FileList | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
        content:
          "You are a master perfumer with extensive knowledge of fragrance ingredients. When given a description or image, suggest 5-7 perfume ingredients that would create a fragrance matching that mood, scene, or concept. For each ingredient, provide its name, a brief description of its scent profile, and why it fits the theme. Return the ingredients in json array format. If the provided input is not sufficient to make meaningful suggestions OR contradictory OR incorrect OR any other issue, respond with empty json.array without any explanation.",
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
    setFiles(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
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
  };

  // Get the last AI message for display
  const lastAiMessage = messages
    .filter((message) => message.role === "assistant")
    .pop();

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <Card className="mb-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">
            Custom Perfume Suggester
          </CardTitle>
          <CardDescription>
            Describe a mood, memory, or upload an image to get personalized
            perfume ingredient suggestions
          </CardDescription>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>

      {lastAiMessage && (
        <Card>
          <CardHeader>
            <CardTitle>Your Custom Perfume Ingredients</CardTitle>
            <CardDescription>
              Based on your input, here are the suggested ingredients for your
              perfect fragrance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="whitespace-pre-wrap">{lastAiMessage.content}</div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
