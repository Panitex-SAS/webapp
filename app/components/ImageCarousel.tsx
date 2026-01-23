"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  { src: "/images/home/carousel/lanchas1.jpg", alt: "Embarcaciones marítimas en operación" },
  { src: "/images/home/carousel/lanchas2.jpg", alt: "Flota de embarcaciones Panitex" },
  { src: "/images/home/carousel/lanchas3.jpg", alt: "Servicios marítimos especializados" },
  { src: "/images/home/carousel/lanchas4.jpg", alt: "Operaciones portuarias" },
  { src: "/images/home/carousel/lanchas5.jpg", alt: "Logística marítima" },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    console.log("Previous clicked");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    console.log("Next clicked");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
            loading={index === 0 ? undefined : "lazy"}
          />
        </div>
      ))}

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-100 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all shadow-lg pointer-events-auto"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-100 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all shadow-lg pointer-events-auto"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-100">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors pointer-events-auto ${
              index === currentIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
