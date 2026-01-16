"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { FaUserGraduate } from "react-icons/fa";

const testimonials = [
  {
    text:
      "Live DevOps classes helped me understand real-world Linux and AWS concepts. Trainers explained everything practically.",
    name: "Kiran Tirmale",
    role: "Software Engineer",
  },
  {
    text:
      "Hands-on labs and real-time projects made learning Docker and Kubernetes very easy and job-oriented.",
    name: "Gopal Patil",
    role: "Cloud & DevOps Learner ",
  },
  {
    text:
      "CI/CD training with Jenkins and Git was excellent. Real pipeline implementation helped me gain confidence.",
    name: "Swapnil Borse",
    role: "DevOps Engineer",
  },
  {
    text:
      "Best DevOps training institute. Trainers are supportive and explain concepts with real production examples.",
    name: "Vishal Thakare",
    role: "DevOps Engineer",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 20 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 3, spacing: 28 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // AUTOPLAY
  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => {
      slider.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-[#f5f5f7] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="rs-shop-header text-3xl sm:text-4xl font-bold">
            What Our Students Say
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Real feedback from students trained in DevOps & Cloud at S Tech Education.
          </p>
        </div>

        {/* SLIDER */}
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((item, index) => (
            <div key={index} className="keen-slider__slide">
              <div
                className="h-full bg-white/80 backdrop-blur-xl border border-gray-200
                rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all"
              >
                {/* QUOTE */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                  “{item.text}”
                </p>

                {/* FOOTER */}
                <div className="flex items-center gap-4">
                  {/* AVATAR */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center
                    bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg"
                  >
                    <FaUserGraduate size={20} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION DOTS */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider.current?.moveToIdx(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all
                ${
                  currentSlide === idx
                    ? "bg-indigo-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-500"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
