import { useRouter } from "next/router";
import Image from "next/image"; // ✅ Import Image
import plans from "@/data/plans";

export default function PlanDetails() {
  const router = useRouter();
  const { id } = router.query;

  const plan = plans.find((p) => p.id === id);

  if (!plan) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6">
        <h1 className="text-3xl font-bold text-red-500 mb-2">
          Oops! Plan not found.
        </h1>
        <p className="text-gray-600 mb-4">
          The plan you’re looking for doesn’t exist or has been removed.
        </p>
        <button
          onClick={() => router.push("/plans")}
          className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Back to Plans
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Image */}
        <div className="relative h-72 w-full">
          <Image
            src={plan.img}
            alt={plan.title}
            fill // ✅ Automatically covers width/height
            style={{ objectFit: "cover" }}
            priority
          />
          <span className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-lg shadow">
            {plan.duration}
          </span>
        </div>

        {/* Content */}
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800">{plan.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{plan.duration}</p>
          <p className="text-xl font-semibold text-green-700 mt-3">
            Price: {plan.price}
          </p>

          {/* Itinerary */}
          <h2 className="mt-8 text-2xl font-semibold border-b pb-2">
            Itinerary
          </h2>
          <ul className="mt-4 space-y-3">
            {Array.isArray(plan.details) && plan.details.length > 0 ? (
              plan.details.map((day, index) => (
                <li
                  key={index}
                  className="p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <span className="block font-semibold text-blue-700">
                    {day.day}
                  </span>
                  <p className="text-gray-700 mt-1">{day.desc}</p>
                </li>
              ))
            ) : (
              <li className="text-gray-500 italic">
                No itinerary details available.
              </li>
            )}
          </ul>

          {/* Contact */}
          <div className="mt-10 p-5 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-xl font-semibold text-blue-800">
              Contact to Book
            </h2>
            <p className="mt-2 text-lg text-gray-800">{plan.contact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}