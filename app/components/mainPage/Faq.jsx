"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsPatchQuestionFill } from "react-icons/bs";

const Faq = () => {

  const faqsarr = [
    {
      id: 1,
      question: "What services do you offer?",
      answer:
        "Our pricing is based on the scope and complexity of each project. Contact us for a custom quote.",
    },
    {
      id: 2,
      question: "Can I make updates to the design later?",
      answer:
        "Yes, you can. Our pricing is based on the scope and complexity of each project. Contact us for a custom quote.",
    },
    {
      id: 3,
      question: "How long does a project take?",
      answer:
        "The timeline depends on the project’s scope and complexity. Contact us for a custom quote.",
    },
    {
      id: 4,
      question: "What is your design process?",
      answer:
        "We follow a structured design process tailored to each client’s needs. Contact us for details.",
    },
    {
      id: 5,
      question: "Do you work with clients internationally?",
      answer:
        "Yes, we collaborate with clients globally. Contact us for a custom quote.",
    },
    {
      id: 6,
      question: "Do I own the rights to the designs?",
      answer:
        "Yes, once the project is completed, you own full rights. Contact us for a custom quote.",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto py-20 text-black dark:text-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-lime-400 font-semibold mb-2 flex items-center justify-center gap-2"><span className="">✱</span> OUR EXPERTISE</p>
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Answer to your{" "}
          <span className="text-lime-400">most common</span> questions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {faqsarr.map((faq) => (
            <motion.div
              key={faq.id}
              className="flex items-start gap-4 bg-zinc-900 p-6 rounded-2xl shadow-md transition hover:shadow-lime-500/30"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="flex-shrink-0 w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center text-black font-bold cursor-pointer transition-colors hover:bg-white"
                whileHover={{ rotate: 15 }}
              >
                <BsPatchQuestionFill className="w-5 h-5 " />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold hover:text-lime-400 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq


