"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TestimonialCarousel from "@/components/testimonial-carousel";
import PerfumeSuggester from "@/components/perfume-suggester";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section with Background Image */}
      <section className="relative">
        <div
          className="h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="container px-4 md:px-6">
              <div className="max-w-[600px] space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  Your story, Bottled!
                </h1>
                <p className="text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Unleash your creativity with personalized fragrance blends.
                  We'll guide you on your journey, adding unique fragrance
                  blends each tailored to your mood and taste!
                </p>
                <PerfumeSuggester />
                {/*  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Enter your name to begin"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="bg-white/90 text-black"
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      Smell your story!
                    </Button>
                  </form> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Tailor fragrances"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Example1</h3>
              <p className="text-gray-500">
                Tailor fragrances to your preferences.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Explore scent components"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Example2</h3>
              <p className="text-gray-500">Explore diverse scent components.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Custom perfume delivery"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Example3</h3>
              <p className="text-gray-500">
                Get your custom perfume delivered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-12">
            Hear from our awesome users!
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-2xl font-bold">Subscribe to our newsletter</h2>
            <div className="w-full max-w-md space-y-2">
              <form className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Input your email" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
