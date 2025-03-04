"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";

export default function SummaryPage() {
  const router = useRouter();
  const { hasIngredients } = useStore();

  useEffect(() => {
    if (!hasIngredients) {
      router.push("/");
    }
  }, [hasIngredients, router]);

  if (!hasIngredients) {
    return null; // Prevent flash of content before redirect
  }

  return (
    <main className="flex-1 container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Your Selection: Byredo Mixed Emotions
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Byredo Mixed Emotions perfume"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Fragrance Notes</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Top Notes</h3>
                  <p className="text-gray-600">
                    Black Currant, Bergamot, Birch Woods
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Mid Notes</h3>
                  <p className="text-gray-600">Wisteria, Papyrus, Violet</p>
                </div>

                <div>
                  <h3 className="font-medium">Base Notes</h3>
                  <p className="text-gray-600">Musk, Cedarwood, Vetiver</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total price of the perfume</span>
              <span>$ 99.99</span>
            </div>

            <div className="flex justify-between text-green-600">
              <span>Discount applied</span>
              <span>$ 10.00</span>
            </div>

            <div className="flex justify-between">
              <span>Tax estimation</span>
              <span>$ 2.00</span>
            </div>

            <div className="border-t pt-2 mt-2 flex justify-between font-bold">
              <span>Total cost</span>
              <span>$ 91.99</span>
            </div>
          </div>
        </div>

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
