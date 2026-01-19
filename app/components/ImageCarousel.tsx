"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  { src: "/images/home/lanchas1.jpg", alt: "Embarcaciones marítimas en operación" },
  { src: "/images/home/lanchas2.jpg", alt: "Flota de embarcaciones Panitex" },
  { src: "/images/home/lanchas3.jpg", alt: "Servicios marítimos especializados" },
  { src: "/images/home/lanchas4.jpg", alt: "Operaciones portuarias" },
  { src: "/images/home/lanchas5.jpg", alt: "Logística marítima" },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
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
      <div className="absolute inset-0 bg-black/30" />

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
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
