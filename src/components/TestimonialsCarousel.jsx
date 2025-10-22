"use client";

import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const TestimonialsCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use provided testimonials or default ones
  const carouselItems = testimonials;

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="relative overflow-hidden px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20 bg-black after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 after:sm:rounded-3xl">
        {/* Background image */}
        <img
          alt="Sundance Mountain Resort background"
          src="/sundance-mountain-resort.jpg"
          className="absolute inset-0 size-full object-cover brightness-150 saturate-0"
        />
        <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />

        {/* Decorative elements */}
        <div
          aria-hidden="true"
          className="absolute -top-56 -left-80 transform-gpu blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)",
            }}
            className="aspect-1097/845 w-274.25 bg-linear-to-r from-[#ff4694] to-[#776fff] opacity-[0.30]"
          />
        </div>
        <div
          aria-hidden="true"
          className="hidden md:absolute md:bottom-16 md:left-200 md:block md:transform-gpu md:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)",
            }}
            className="aspect-1097/845 w-274.25 bg-linear-to-r from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-2xl lg:mx-0">


          {/* Testimonial content */}
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <figure>
                <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl/8">
                  <p>"{item.testimonial}"</p>
                </blockquote>
                <figcaption className="mt-6 text-base text-gray-200">
                  <div className="font-semibold">{item.name}</div>
                  <div className="mt-1">{item.title}</div>
                </figcaption>
              </figure>
            </div>
          ))}

          {/* Navigation controls */}
          <div className="mt-10 flex justify-between">
            <button
              onClick={prevSlide}
              className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>

            {/* Indicators */}
            <div className="flex items-center space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === currentIndex ? "bg-white" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
