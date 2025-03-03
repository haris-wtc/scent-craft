"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import { useUserStore } from "@/store/useStore"
import { useToast } from "@/components/ui/use-toast"

export default function DesignPage() {
  const router = useRouter()
  const { hasFilledInput, userName } = useUserStore()
  const { toast } = useToast()

  useEffect(() => {
    if (!hasFilledInput) {
      toast({
        title: "Please enter your name first",
        description: "You need to enter your name on the home page before proceeding.",
        variant: "destructive",
      })
      router.push("/")
    }
  }, [hasFilledInput, router, toast])

  if (!hasFilledInput) {
    return null // Prevent flash of content before redirect
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation currentPath="/design" />

      <main className="flex-1 container py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Design Your Fragrance, {userName}</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-bold mb-4">Select Fragrance Notes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Top Notes</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">
                    Black Currant
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Bergamot
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Birch Woods
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Citrus
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Mid Notes</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">
                    Wisteria
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Papyrus
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Violet
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Rose
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Base Notes</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">
                    Musk
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Cedarwood
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Vetiver
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Vanilla
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-bold mb-4">Choose Bottle</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Bottle design 1"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Select
                </Button>
              </div>
              <div className="text-center">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Bottle design 2"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Select
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-bold mb-4">Add Label</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Fragrance Name</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="My Signature Scent" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Label Color</label>
                <div className="grid grid-cols-4 gap-2">
                  <button className="w-8 h-8 rounded-full bg-red-500"></button>
                  <button className="w-8 h-8 rounded-full bg-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-green-500"></button>
                  <button className="w-8 h-8 rounded-full bg-purple-500"></button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-bold mb-4">Save Creation</h2>
            <div className="space-y-4">
              <p className="text-gray-500">Review your fragrance creation before proceeding to checkout.</p>
              <Button className="w-full" asChild>
                <Link href="/summary">Save & Continue</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-white">
        <div className="container px-4 md:px-6 py-8 text-center text-sm text-gray-500">
          © 2024 ScentCraft, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

