import plans from "../data/plans";
import Image from "next/image";
import Link from "next/link";
import BackButton from "../components/BackButton"; // ✅ import back button

export default function PlansPage() {
  return (
    <div className="p-6 bg-white">
      {/* Back Button */}
      <BackButton /> 

      <h1 className="text-4xl font-bold text-center mb-8 text-yellow-600">
        Our Travel Plans
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={plan.img}
                alt={plan.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{plan.title}</h2>
              <p className="text-gray-600">{plan.duration}</p>
              <p className="text-yellow-600 font-bold mt-2">{plan.price}</p>
              <Link href={`/plans/${plan.id}`}>
                <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
