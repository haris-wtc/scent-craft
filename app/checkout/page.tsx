"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStore } from "@/store/useStore";

export default function CheckoutPage() {
  const { reset } = useStore();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    reset();
  };

  return (
    <main className="flex-1 container py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

        {orderPlaced ? (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              {" "}
              Order is successfully placed!
            </span>
          </div>
        ) : (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                id="name"
                placeholder="Enter your full name"
                className="mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <Textarea
                id="address"
                placeholder="Enter your full address"
                className="mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="payment"
                className="block text-sm font-medium text-gray-700"
              >
                Payment Method
              </label>
              <Select>
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="credit_card">Credit Card</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="bg-secondary p-4 rounded-md">
              <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>€99.00</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-€10.00</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT (included)</span>
                  <span>€15.84</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t">
                  <span>Total</span>
                  <span>€89.00</span>
                </div>
              </div>
            </div>

            <Button onClick={handlePlaceOrder} className="w-full">
              Place Order
            </Button>
          </form>
        )}
      </div>
    </main>
  );
}
