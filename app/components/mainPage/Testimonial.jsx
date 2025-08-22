"use client";
import { useState, useEffect } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Iyer",
      role: "Entrepreneur",
      image: "/testimonial/portrait-elegant-professional-businesswoman.jpg",
      rating: 5,
      feedback:
        "MediaMates helped me scale my brand through powerful digital campaigns. Their team is professional, creative, and result-driven. Truly a game changer for my business!",
    },
    {
      id: 2,
      name: "Neha Reddy",
      role: "Marketing Manager",
      image: "/testimonial/medium-shot-woman-working-as-lawyer.jpg",
      rating: 5,
      feedback:
        "The video ads and content strategies from MediaMates were top-notch. Our engagement doubled within weeks. Highly recommended for businesses that want to grow fast.",
    },
    {
      id: 3,
      name: "Aditi Sharma",
      role: "Small Business Owner",
      image: "/testimonial/testimonial-image.jpg",
      rating: 5,
      feedback:
        "MediaMates gave my business a strong online presence. Their creativity and professionalism set them apart. I started seeing real results from day one.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Navigate Prev
  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Navigate Next
  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval); // cleanup
  }, [testimonials.length]);

  const { name, role, image, rating, feedback } = testimonials[current];

  return (
    <section className="max-w-7xl mx-auto text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <p className="text-lime-400 font-semibold tracking-wide uppercase">
          <span className="text-lg">✱</span> Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-black dark:text-white">
          Hear what <span className="text-lime-400">our happy</span> clients
          say
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left: Client Image */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-72 h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Testimonial Card */}
        <div
          className="relative bg-zinc-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg flex-1 
             transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(163,230,53,0.5)] 
             hover:before:opacity-100">
          {/* Glow effect at bottom using ::before */}
          <div
            className="absolute bottom-0 left-0 w-full h-1 bg-lime-400 opacity-0 
                  group-hover:opacity-100 transition-all duration-300 rounded-b-2xl"
          ></div>

          {/* Stars & Rating */}
          <div className="flex items-center mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-lime-400 fill-current" />
            ))}
            <span className="ml-2 text-gray-300 font-medium">{rating}.0</span>
          </div>

          {/* Feedback */}
          <p className="text-gray-300 leading-relaxed italic">“{feedback}”</p>

          {/* Divider */}
          <div className="border-t border-gray-700 my-6"></div>

          {/* Name & Role */}
          <div>
            <h4 className="font-semibold text-lg">{name}</h4>
            <p className="text-sm text-gray-400">{role}</p>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-6 right-6 flex gap-3">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
