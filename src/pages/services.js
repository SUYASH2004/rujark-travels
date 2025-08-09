import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const servicesData = [
  {
    title: "Adventure Tours",
    img: "/services/adventure.jpeg",
    description:
      "Experience thrilling adventures with our specially curated adventure tours. From trekking through the Himalayas to scuba diving in pristine waters, we have it all.",
  },
  {
    title: "Pilgrim Tours",
    img: "/services/pilgrim.jpeg",
    description:
      "Discover spiritual destinations with our pilgrim tours. Visit ancient temples, holy rivers, and sacred sites that inspire peace and devotion.",
  },
  {
    title: "Educational Tours",
    img: "/services/educational.jpeg",
    description:
      "Our educational tours are designed to combine learning and exploration. Perfect for schools, colleges, and curious minds seeking knowledge.",
  },
  {
    title: "Heritage Tours",
    img: "/services/heritage.jpeg",
    description:
      "Explore the rich cultural heritage of India and beyond. From historical monuments to UNESCO World Heritage sites, witness the grandeur of history.",
  },
  {
    title: "Tailor Made Tours",
    img: "/services/tailormade.jpeg",
    description:
      "Create your own travel story with our tailor-made tours. We customize every detail to suit your preferences, making your journey truly unique.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="bg-white text-black px-6 md:px-20 py-12 font-sans relative">
      {/* Creative Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-4"
      >
        ✨ Our <span className="text-yellow-500">Services</span> ✨
      </motion.h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        At Rujark Travels, we offer a range of tours designed to give you
        unforgettable experiences — from thrilling adventures to peaceful pilgrimages.
      </p>

      {/* Services Grid */}
        <div
        className={`flex flex-wrap justify-center gap-6 transition-all duration-300 ${
            selectedService ? "blur-md scale-[0.98]" : ""
        }`}
        >
        {servicesData.map((service, idx) => (
            <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer border border-yellow-400 w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)]"
            onClick={() => setSelectedService(service)}
            >
            <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white font-bold text-lg">{service.title}</h3>
            </div>
            </motion.div>
        ))}
        </div>


      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            style={{
              backgroundColor: "transparent", // no black background
              backdropFilter: "blur(8px)", // actual blur effect
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative border border-yellow-400"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <X size={24} />
              </button>

              <img
                src={selectedService.img}
                alt={selectedService.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold mt-4">
                {selectedService.title}
              </h2>
              <p className="mt-2 text-gray-600">
                {selectedService.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;