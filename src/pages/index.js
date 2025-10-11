import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";
import { FaInstagram, FaFacebookF, FaStar, FaQuoteLeft } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdArrowForward } from "react-icons/md";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Pune",
      rating: 5,
      text: "Rujark Tours transformed my solo trip into a magical experience. Their attention to detail and personalized itineraries exceeded all expectations!",
      image: "/testimonial1.jpg",
      trip: "Chandigarh - Manali - Amritsar Tour"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "The most professional tour company I've ever encountered. Every moment was perfectly planned, and the hidden gems they showed us were incredible.",
      image: "/testimonial2.jpg",
      trip: "Cochin – Munnar – Marayoor Tour"
    },
    {
      id: 3,
      name: "Anita Desai",
      location: "Mumbai",
      rating: 5,
      text: "From booking to completion, everything was flawless. Our family vacation became the most memorable trip of our lives. Thank you Rujark!",
      image: "/testimonial3.jpg",
      trip: "Jaipur - Jaisalmer - Sam - Jodhpur Tour"
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Pune",
      rating: 5,
      text: "Sustainable tourism at its best! They not only showed us beautiful places but also educated us about local cultures and conservation.",
      image: "/testimonial4.jpg",
      trip: "Bangalore Tour"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="overflow-hidden">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/20 to-blue-900/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/80"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-orange-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white rounded-full animate-ping"></div>

        <div className="relative text-center text-white max-w-4xl px-4">
          <div className="mb-6">
            <span className="bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-400/30">
              Promoted by Nutan Incubation center, NMIET
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Discover
            </span>
            <br />
            <span className="text-white">The Undiscovered</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            Where <span className="text-yellow-400 font-semibold">adventure</span> meets{' '}
            <span className="text-green-400 font-semibold">sustainability</span>. Crafting{' '}
            <span className="text-pink-400 font-semibold">unforgettable journeys</span> that connect you with the soul of every destination.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/plans"
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 rounded-full text-lg font-semibold text-white hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Explore Journeys <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/custom-plan"
              className="group border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Custom Trip Plan
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5000+", label: "Happy Travelers" },
              { number: "50+", label: "Destinations" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "3", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonial Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 text-9xl">❝</div>
          <div className="absolute bottom-20 right-10 text-9xl">❞</div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              What Our <span className="text-yellow-400">Travelers Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our adventurers have to say about their experiences.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Testimonial Cards */}
            <div className="relative h-96">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-500 transform ${
                    index === currentTestimonial
                      ? 'opacity-100 scale-100 translate-x-0'
                      : index < currentTestimonial
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                    <FaQuoteLeft className="text-yellow-400 text-4xl mb-6" />
                    
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Testimonial Content */}
                      <div>
                        <p className="text-xl text-gray-200 leading-relaxed mb-6">
                          {testimonial.text}
                        </p>
                        
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-lg" />
                          ))}
                        </div>
                        
                        <div className="text-left">
                          <div className="text-2xl font-bold text-white">{testimonial.name}</div>
                          <div className="text-gray-400">{testimonial.location} • {testimonial.trip}</div>
                        </div>
                      </div>
                      
                      {/* Testimonial Image */}
                      <div className="relative group">
                        <div className="relative rounded-2xl overflow-hidden transform group-hover:scale-105 transition duration-300">
                          <div className="w-full h-64 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl flex items-center justify-center">
                            <div className="text-6xl">🌄</div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              →
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-yellow-400 w-8'
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="text-center mt-16">
            {/* <div className="inline-flex flex-wrap justify-center gap-8 opacity-100">
              {["TripAdvisor", "Google Reviews", "Travel+Leisure", "Lonely Planet"].map((badge) => (
                <div key={badge} className="text-yellow-400 font-semibold text-sm">
                  ⭐ {badge} Certified
                </div>
              ))}          
            </div> */}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-yellow-400 mb-4">Ready for Your Adventure?</h2>
                <p className="text-xl text-gray-300">
                  Let's create your perfect journey together. We're here to make your travel dreams come true.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-xl backdrop-blur-sm">
                  <div className="bg-yellow-400/20 p-3 rounded-full">
                    <MdPhone className="text-yellow-400 text-2xl" />
                  </div>
                  <div>
                    <div className="text-gray-400">Call Us</div>
                    <div className="text-xl font-semibold">+91 95588 29696</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-xl backdrop-blur-sm">
                  <div className="bg-green-400/20 p-3 rounded-full">
                    <MdEmail className="text-green-400 text-2xl" />
                  </div>
                  <div>
                    <div className="text-gray-400">Email Us</div>
                    <div className="text-xl font-semibold">rujarktours@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-xl backdrop-blur-sm">
                  <div className="bg-blue-400/20 p-3 rounded-full">
                    <MdLocationOn className="text-blue-400 text-2xl" />
                  </div>
                  <div>
                    <div className="text-gray-400">Visit Us</div>
                    <div className="text-xl font-semibold">Talegaon Dabhade, Pune</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: FaInstagram, color: "hover:text-pink-500", href: "https://www.instagram.com/paryatan_official?igsh=ejBzcHl1aG84Nmwx" },
                  { icon: FaFacebookF, color: "hover:text-blue-500", href: "https://facebook.com" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-800/50 p-4 rounded-full text-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/20 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-yellow-400 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 py-4 rounded-xl font-semibold text-white hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* ChatBot Component */}
      <ChatBot />
    </div>
  );
}