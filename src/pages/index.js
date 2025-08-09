import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return(
    <div>
      <Navbar />
      <section className="h-screen flex items-center justify-center bg-cover bg-center"
       style={{backgroundImage: 'url(https://unsplash.com/photos/beautiful-beach-with-turquoise-water-and-green-trees-oxle6lKEGhk)'}}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center text-white max-w-lg">
          <h1 className="text-5xl font-bold mb-4">Discover the Undiscovered with Rujark Tours.</h1>
          <p className="text-lg text-gray-700">Embark on unforgettable journeys crafted with passion, personalized just for you. Experience the beauty of the world with our expert guides and sustainable travel practices.</p>
          <a href="/plans" className="bg-blue-500 px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-600 transition">
          View plans
          </a>

        </div>
      </section>
      <Footer />
    </div>
  )
}