import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, User, Leaf, Users, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  const [flipped, setFlipped] = useState({ vision: false, mission: false });
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/about/about1.jpg",
    "/about/about2.jpg",
    "/about/about3.jpg",
    "/about/about4.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

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
    <div className="bg-white text-black px-6 md:px-20 py-12">
      
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* About Us - Side by Side */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-5xl font-bold mb-4 text-yellow-400">About Us</h1>
          <p className="text-lg text-gray-700">
            Welcome to Paryatan Tours, your gateway to unforgettable travel experiences. We are a passionate team of travel enthusiasts dedicated to curating exceptional tours that inspire adventure, discovery, and connection.
            <br /><br />
            Founded on the belief that travel enriches the soul and broadens the mind, Paryatan has been helping explorers like you embark on journeys filled with wonder and excitement. Whether you&apos;re seeking the thrill of uncharted territories, the tranquility of serene landscapes, or a deep dive into cultural wonders, we have a perfect itinerary tailored just for you.
            <br /><br />
            At Paryatan, we pride ourselves on delivering personalized, high-quality travel experiences. Our carefully crafted tours combine expert local knowledge with a commitment to sustainable and responsible tourism, ensuring that every trip not only meets your expectations but exceeds them.
            <br /><br />
            Join us as we navigate the world, one adventure at a time. Let us take care of the details while you focus on making memories that will last a lifetime.
          </p>
        </motion.div>

        {/* Right Side Slideshow */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={images[currentImage]}
            alt="Travel"
            fill
            className="object-cover transition-all duration-1000"
            priority
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentImage === index
                    ? "bg-yellow-500 scale-125"
                    : "bg-white/70 hover:bg-yellow-400"
                }`}
              ></button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-bold mb-6 text-center text-yellow-500">
        Why Choose Us?
      </h2>
      <div className="flex justify-center">
        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-yellow-500 justify-center">
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
      </div>

      {/* Vision & Mission */}
      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-center text-yellow-500">
        Our Vision & Mission
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Vision */}
        <motion.div>
          <div className="w-full h-48 bg-gradient-to-br from-yellow-100 via-white to-yellow-50 border border-yellow-400 rounded-xl p-6 flex flex-col justify-center shadow-md">
            <h3 className="text-lg font-bold text-yellow-500">Our Vision</h3>
            <p className="mt-2 font-semibold text-gray-800">
              To be a trusted leader in the travel industry, known for our innovation, excellence, and commitment to responsible tourism.
            </p>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div>
          <div className="w-full h-48 bg-gradient-to-br from-yellow-100 via-white to-yellow-50 border border-yellow-400 rounded-xl p-6 flex flex-col justify-center shadow-md">
            <h3 className="text-lg font-bold text-yellow-500">Our Mission</h3>
            <p className="mt-2 font-semibold text-gray-800">
              To create inspiring and meaningful travel experiences that connect people with the beauty and diversity of the world.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
