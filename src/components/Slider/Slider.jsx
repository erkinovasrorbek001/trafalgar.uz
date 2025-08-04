import React, { useState } from "react";
import igm from "../../assets/Mask Group.png";
import './Slider.css'; // optional if you want to add animations or extra styles

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
    image: igm,
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
    <div id="slider__container" className="slider__container mx-auto  px-8 sm:px-6  lg:px-8 py-12 ">
      <div  className="max-w-[800px] box mx-auto  bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg  sm:p-12 transition-all duration-300">
        <h2 className="title text-2xl sm:text-3xl font-semibold text-center mb-8">
          What our customers are saying
        </h2>

        <div className="slider__nav  max-w-[700px] max-[825px]:block max-[825px]:text-center
         mx-auto flex flex-col sm:flex-row items-center gap-6 p-5 ">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className= "img w-24 h-24 rounded-full border-4  -mt-5 border-white object-cover shadow-md"
          />

          <div className="flex-1 text-center text-nowrap sm:text-left">
            <h3 className="text-xl font-bold">
              {testimonials[currentIndex].name}
            </h3>
            <p id="paragrif" className=" text-sm  text-gray-100 mb-4">
              {testimonials[currentIndex].role}
            </p>
          </div>
            <p id="paragrif" className="italic  w-[45%] text-gray-200  ml-0 mr-0 max-[825px]:text-center max-[825px]:mx-auto leading-relaxed">
              “{testimonials[currentIndex].quote}”
            </p>
        </div>

        <div className="flex justify-center items-center mt-8 gap-6">
          <button
            onClick={prevSlide}
            className="text-white text-2xl hover:text-gray-300 transition"
          >
            &#8592;
          </button>

          <div className="flex space-x-2 gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full gap-5 ${
                  i === currentIndex ? "bg-white" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="text-white text-2xl gap-5 ml-5 hover:text-gray-300 transition"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
