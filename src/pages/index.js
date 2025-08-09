import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Link from "next/link"; // ✅ Import Link for navigation

export default function Home() {
  return (
    <div>
      <Navbar />
      <section
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>

        <div className="relative text-center text-white max-w-2xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg text-yellow-400">
            Discover the Undiscovered with Rujark Tours.
          </h1>
          <p className="text-lg md:text-xl text-white font-semibold mb-6 drop-shadow-md">
            Embark on unforgettable journeys crafted with passion, personalized
            just for you. Experience the beauty of the world with our expert
            guides and sustainable travel practices.
          </p>
          <Link
            href="/plans"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-full text-lg font-medium text-white hover:from-yellow-500 hover:to-orange-600 transition"
          >
            View plans
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Rujark Tours</h2>
            <div className="space-y-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-pink-500 transition"
              >
                <FaInstagram /> <span>Instagram</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-500 transition"
              >
                <FaFacebookF /> <span>Facebook</span>
              </a>
              <a
                href="mailto:paryatanofficial@gmail.com"
                className="flex items-center space-x-2 hover:text-red-400 transition"
              >
                <MdEmail /> <span>Gmail</span>
              </a>
            </div>
          </div>

          {/* Middle Column */}
          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="text-xl hover:text-yellow-400">Home</Link></li>
              <li><Link href="/about" className="text-xl hover:text-yellow-400">About Us</Link></li>
              <li><Link href="/services" className="text-xl hover:text-yellow-400">Our Services</Link></li>
              <li><Link href="/plans" className="text-xl hover:text-yellow-400">Plans</Link></li>
              <li><Link href="/contact" className="text-xl hover:text-yellow-400">Contact Us</Link></li>
            </ul>
            <div className="mt-4 space-y-2 text-gray-300">
              <p className="flex items-center space-x-2"><MdPhone /> <span>+91 95588 29696</span></p>
              <p className="flex items-center space-x-2"><MdEmail /> <span>paryatanofficial@gmail.com</span></p>
              <p className="flex items-center space-x-2"><MdLocationOn /> <span>179 - Main Road, Jyoti Nagar, Aurangabad</span></p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 py-3 rounded font-semibold text-white hover:from-yellow-500 hover:to-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
