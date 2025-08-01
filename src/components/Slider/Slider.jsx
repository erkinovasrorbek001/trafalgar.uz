import React, { useState } from "react";
import igm from "../../assets/Mask Group.png";

const testimonials = [
  {
    name: "Edward Newgate",
    role: "Founder Circle",
    image: igm,
    quote:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious forms, long calls, or administrative hassles) and securely.",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    image: igm,
    quote:
      "Security and privacy are our top priorities. We ensure that your data is protected with the highest standards of encryption and compliance.",
  },
  {
    name: "jekyll",
    role: "Founder Circle",
    image:igm,
    quote:
      "As a healthcare provider, you can trust us to deliver reliable and efficient solutions that enhance patient care and streamline operations.",
  },
  {
    name: "Dr. John Doe",
    role: "Chief Medical Officer",
    image: igm,
    quote:
      "Experience the future of healthcare with our innovative solutions that empower both patients and providers.",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className=" max-w-[800px]">

    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl p-8 text-white shadow-lg">
      <h2 className="text-xl font-semibold text-center mb-6">
        What our customer are saying
      </h2>

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
        <div className="flex justify-center sm:justify-start">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-25 h-26 rounded-full border-2 border-white object-cover"
          />
        </div>
        <div className="text-center sm:text-left mt-4 sm:mt-0">
          <h3 className="font-bold">{testimonials[currentIndex].name}</h3>
          <p className="text-sm text-gray-100">
            {testimonials[currentIndex].role}
          </p>
        </div>
          <p className="mt-4 italic text-gray-200 w-[50%] mr-0 ml-auto text-left mx-auto max-w-full max-sm:w-[100%] max-sm:text-center sm:max-w-[80%]">
            “{testimonials[currentIndex].quote}”
          </p>
      </div>

      <div className="flex justify-center items-center mt-6 space-x-6">
        <button
          onClick={prevSlide}
          className="text-white text-2xl hover:text-gray-300"
          >
          &#8592;
        </button>
        <div className="flex space-x-2">
          {testimonials.map((_, i) => (
            <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === currentIndex ? "bg-white" : "bg-gray-300"
            }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="text-white text-2xl hover:text-gray-300"
          >
          &#8594;
        </button>
      </div>
    </div>
          </div>
  );
}
