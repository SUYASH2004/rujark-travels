import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, User, Leaf, Users, Star } from "lucide-react";

const About = () => {
  const [flipped, setFlipped] = useState({ vision: false, mission: false });
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/travel1.jpg",
    "/images/travel2.jpg",
    "/images/travel3.jpg"
  ];

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const toggleFlip = (card) => {
    setFlipped((prev) => ({ ...prev, [card]: !prev[card] }));
  };

  const features = [
    {
      icon: <MapPin className="w-8 h-8 transition-colors duration-300 group-hover:text-black text-yellow-500" />,
      title: "Expertly Curated Tours",
      text: "Our tours are carefully designed to showcase the best of each destination, from iconic landmarks to hidden gems.",
    },
    {
      icon: <User className="w-8 h-8 transition-colors duration-300 group-hover:text-black text-yellow-500" />,
      title: "Personalized Itineraries",
      text: "We create custom travel plans that match your interests, preferences, and budget, ensuring a unique and fulfilling journey.",
    },
    {
      icon: <Leaf className="w-8 h-8 transition-colors duration-300 group-hover:text-black text-yellow-500" />,
      title: "Sustainable Travel Practices",
      text: "We are committed to responsible travel, minimizing our environmental impact and supporting local communities.",
    },
    {
      icon: <Users className="w-8 h-8 transition-colors duration-300 group-hover:text-black text-yellow-500" />,
      title: "Local Guides with Insider Knowledge",
      text: "Explore destinations with knowledgeable local guides who offer unique insights and authentic experiences.",
    },
    {
      icon: <Star className="w-8 h-8 transition-colors duration-300 group-hover:text-black text-yellow-500" />,
      title: "Unforgettable Experiences Tailored to You",
      text: "We craft adventures perfectly suited to your needs, creating memories that last a lifetime.",
    },
  ];

  return (
    <div className="bg-white text-black font-sans px-6 md:px-20 py-12">
      {/* About Us - Side by Side */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">About Rujark Travels</h1>
          <p className="text-lg text-gray-700">
            At Rujark Travels, we believe that travel is more than just visiting a new place; 
            it’s about immersing yourself in different cultures, creating lasting memories, 
            and discovering the world's wonders. Our passion for exploration and commitment to 
            providing exceptional travel experiences drive everything we do.
          </p>
        </motion.div>

        {/* Right Side Slideshow */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={images[currentImage]}
            alt="Travel"
            className="w-full h-full object-cover transition-all duration-1000"
          />
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h2>
      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-yellow-500">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group flex-shrink-0 w-64 bg-white border border-yellow-400 rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start"
          >
            {item.icon}
            <h3 className="font-bold text-lg mt-3">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Vision & Mission */}
      <h2 className="text-2xl font-bold mt-12 mb-6 text-center">Our Vision & Mission</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Vision */}
        <motion.div
          className="cursor-pointer perspective"
        >
          <div
            className={`relative w-full h-48 transition-transform duration-700 transform-style-preserve-3d ${
              flipped.vision ? "rotate-y-180" : ""
            }`}
          >
            <div className="absolute w-full h-full bg-yellow-100 border border-yellow-400 rounded-xl p-6 backface-hidden flex flex-col justify-center">
              <h3 className="text-lg font-bold">Our Vision</h3>
              <p className="mt-2 font-semibold text-xl">
                To be the world's leading travel company, inspiring people to explore and connect with the world in meaningful ways.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          className="cursor-pointer perspective"
        >
          <div
            className={`relative w-full h-48 transition-transform duration-700 transform-style-preserve-3d ${
              flipped.mission ? "rotate-y-180" : ""
            }`}
          >
            <div className="absolute w-full h-full bg-yellow-100 border border-yellow-400 rounded-xl p-6 backface-hidden flex flex-col justify-center">
              <h3 className="text-lg font-bold">Our Mission</h3>
              <p className="mt-2 font-semibold text-xl">
                To provide exceptional travel experiences that are both enriching and sustainable, leaving a positive impact on the places we visit and the people we meet.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;