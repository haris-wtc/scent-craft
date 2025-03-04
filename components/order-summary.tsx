export function OrderSummary() {
  return (
    <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border mb-8">
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

        <div className="border-t border-border pt-2 mt-2 flex justify-between font-bold">
          <span>Total cost</span>
          <span>$ 91.99</span>
        </div>
      </div>
    </div>
  )
}

