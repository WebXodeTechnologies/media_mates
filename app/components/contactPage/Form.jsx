import React from "react";
import Image from "next/image";

const Form = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-green-400 uppercase tracking-wider mb-3">Contact Us</p>
          
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-5">
            Reach out and <span className="text-green-400">start your</span> journey today
          </h2>
          
          <p className="text-gray-400 mb-8">
            Connect with us to bring your ideas to life through innovative designs
            and creative solutions tailored to your vision.
          </p>

          <div className="space-y-5">
            <div>
              <h3 className="text-green-400 font-semibold">Contact us:</h3>
              <p className="text-gray-300">+123 456 789</p>
            </div>

            <div>
              <h3 className="text-green-400 font-semibold">E-mail address:</h3>
              <p className="text-gray-300">info@domain.com</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Follow Us:</h3>
              <div className="flex space-x-4">
                {[
                  { src: "/icons/facebook.png", alt: "Facebook" },
                  { src: "/icons/instagram.png", alt: "Instagram" },
                  { src: "/icons/linkedin.png", alt: "LinkedIn" },
                  { src: "/icons/youtube.png", alt: "YouTube" },
                ].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-green-400 p-3 rounded-full hover:bg-green-300 transition"
                  >
                    <Image src={icon.src} alt={icon.alt} width={16} height={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-black border border-gray-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Send us a <span className="text-green-400">message</span>
          </h3>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full p-3 rounded-lg bg-black border border-gray-700 
                           focus:outline-none focus:border-green-400"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full p-3 rounded-lg bg-black border border-gray-700 
                           focus:outline-none focus:border-green-400"
              />
            </div>

            <input
              type="tel"
              placeholder="Enter your mobile no."
              className="w-full p-3 rounded-lg bg-black border border-gray-700 
                         focus:outline-none focus:border-green-400"
            />
            
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 
                         focus:outline-none focus:border-green-400"
            />
            
            <textarea
              rows="4"
              placeholder="Write message..."
              className="w-full p-3 rounded-lg bg-black border border-gray-700 
                         focus:outline-none focus:border-green-400"
            ></textarea>
            
            <button
              type="submit"
              className="w-full bg-green-400 text-black font-semibold py-3 
                         rounded-full hover:bg-green-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
