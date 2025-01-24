"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Tshirt Eccomerce",
    description:
      "A T-shirt e-commerce platform powered by generative AI, enabling users to design and customize their own canvas directly on T-shirts. The platform integrates multiple APIs and services to deliver a seamless and innovative experience.",
    image: "/images/tshirt.png",
  },
  {
    title: "Local AI chatbot with voice assistant in realtime ",
    description:
      "A local AI chatbot with a real-time voice assistant, powered by a privacy-focused large language model running locally. It ensures data security while offering optional internet connectivity for retrieving additional information. The chatbot integrates with custom Arduino-based robots, enabling movement and interactive engagement with the environment.",
    image: "/images/chatbot.png",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Project 4",
    description: "A brief description of Project 4",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Project 5",
    description: "A brief description of Project 5",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-lg overflow-hidden shadow-lg border border-border"
        >
          <img
            src={projects[currentIndex].image || "/placeholder.svg"}
            alt={projects[currentIndex].title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">
              {projects[currentIndex].title}
            </h3>
            <p className="text-muted-foreground">
              {projects[currentIndex].description}
            </p>
          </div>
        </motion.div>
        <button
          onClick={prevProject}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-background text-foreground p-2 rounded-full shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextProject}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-background text-foreground p-2 rounded-full shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </motion.section>
  );
}
