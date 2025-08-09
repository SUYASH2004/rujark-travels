import BackButton from "@/components/BackButton";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa"; // Icons

export default function Contact() {
  return (
    <>
      {/* Back button */}
      <div className="p-4">
        <BackButton />
      </div>

      <div className="pt-24 pb-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-center text-4xl md:text-5xl font-bold text-yellow-500 mb-12">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="mb-2">
                <strong>Phone:</strong> +91 95588 29696
              </p>
              <p className="mb-2">
                <strong>Email:</strong> paryatanofficial@gmail.com
              </p>
              <p className="mb-4">
                <strong>Address:</strong> 179 - Main Road, Jyoti Nagar, Aurangabad
              </p>
              <div className="flex space-x-6 text-2xl">
                <a
                  href="https://instagram.com"
                  className="hover:text-pink-500 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com"
                  className="hover:text-blue-500 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="mailto:paryatanofficial@gmail.com"
                  className="hover:text-red-500 transition"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 border rounded focus:outline-none"
                ></textarea>
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-full text-white hover:from-yellow-500 hover:to-orange-600 transition w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
