"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Emily R.",
    rating: 5,
    text: "Amazing scents tailored perfectly for me!",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "James T.",
    rating: 5,
    text: "Unique fragrance blends that last all day.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Sophia L.",
    rating: 5,
    text: "Incredible personalization and lovely aromas.",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + 1) % (testimonials.length - visibleTestimonials + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length - visibleTestimonials
        : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="flex justify-center mb-4 md:hidden">
        <Button
          variant="outline"
          size="icon"
          className="mr-2"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={nextSlide}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / visibleTestimonials)
            }%)`,
            width: `${(testimonials.length / visibleTestimonials) * 100}%`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="px-4"
              style={{ width: `${100 / testimonials.length}%` }}
            >
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <div className="flex text-yellow-400 mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-500">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex justify-center mt-6">
        <Button
          variant="outline"
          size="icon"
          className="mr-2"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button variant="outline" size="icon" onClick={nextSlide}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  );
}
