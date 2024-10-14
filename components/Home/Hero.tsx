"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Hero() {
  const IMAGES = [
    { url: "/vinc-images/vinc1.jpeg", alt: "Car One" },
    { url: "/vinc-images/vinc2.jpeg", alt: "Car Two" },
    { url: "/vinc-images/vinc3.jpeg", alt: "Car Three" },
  ];

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full relative mt-6"
    >
      <CarouselContent>
        {IMAGES.map(({ url, alt }, index) => (
          <CarouselItem key={index} className="w-full">
            <div className=" w-full h-[76vh]">
              <img
                src={url}
                alt={alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Previous Arrow */}
      <CarouselPrevious
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
        aria-label="Previous"
      />

      {/* Next Arrow */}
      <CarouselNext
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
        aria-label="Next"
      />
    </Carousel>
  );
}
