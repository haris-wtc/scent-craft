"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { FragranceNotes } from "@/components/fragrance-notes";
import { OrderSummary } from "@/components/order-summary";

export default function SummaryPage() {
  const router = useRouter();
  const { hasIngredients, bottleDesign } = useStore();

  useEffect(() => {
    if (!hasIngredients()) {
      router.push("/");
    }
  }, [hasIngredients, router]);

  if (!hasIngredients()) {
    return null; // Prevent flash of content before redirect
  }

  return (
    <main className="flex-1 container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Your Selection: {bottleDesign.text || "Custom Fragrance"}
        </h1>

        <FragranceNotes />

        <OrderSummary />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" asChild>
            <Link href="/design">Review & Edit</Link>
          </Button>
          <Button asChild>
            <Link href="/checkout">Proceed to Checkout</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
