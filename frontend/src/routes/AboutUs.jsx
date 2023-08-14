import React, { useState } from "react";

const AboutUsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    "We are dedicated to providing insightful connections and information between undergraduate students attending CUNY.",
    "Our mission is to empower students with valuable information about educational institutions through major-connected forums.",
  ];

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="p-8 bg-[#1F1F1F] mx-auto mt-8 mb-0 rounded-t-3xl w-full">
      <p className="text-5xl mb-8 font-bold text-white text-center">About Us</p>
      <div className="text-xl text-[#b7b7b7] mb-4 text-center">
        <p>{slides[activeSlide]}</p>
      </div>
      <div className="flex items-center justify-center">
        <button onClick={prevSlide}></button>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`${
              index === activeSlide ? "bg-fuchsia-500" : "bg-gray-300"
            } w-4 h-4 mx-1 rounded-full`}
          />
        ))}
        <button onClick={nextSlide}></button>
      </div>
    </div>
  );
};

export default AboutUsSection;