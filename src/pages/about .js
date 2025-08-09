import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
  return(
    <div>
      <Navbar />
      <section className="p-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-700">
          Welcome to Paryatan Tours, your gateway to unforgettable travel experiences. We are a passionate team of travel enthusiasts dedicated to curating exceptional tours that inspire adventure, discovery, and connection.

          Founded on the belief that travel enriches the soul and broadens the mind, Paryatan has been helping explorers like you embark on journeys filled with wonder and excitement. Whether you're seeking the thrill of uncharted territories, the tranquility of serene landscapes, or a deep dive into cultural wonders, we have a perfect itinerary tailored just for you.

          At Paryatan, we pride ourselves on delivering personalized, high-quality travel experiences. Our carefully crafted tours combine expert local knowledge with a commitment to sustainable and responsible tourism, ensuring that every trip not only meets your expectations but exceeds them.

          Join us as we navigate the world, one adventure at a time. Let us take care of the details while you focus on making memories that will last a lifetime.
        </p>
      </section>
      <Footer />
    </div>
  )
}