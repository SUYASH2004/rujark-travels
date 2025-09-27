import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import plans from "@/data/plans";

export default function PlanDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundPlan = plans.find((p) => p.id === id.trim());
      setPlan(foundPlan);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-600">Loading plan details...</p>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6">
        <h1 className="text-3xl font-bold text-red-500 mb-2">
          Oops! Plan not found.
        </h1>
        <p className="text-gray-600 mb-4">
         desc: {"The plan you're looking for doesn't exist or has been removed."}
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
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Image with Overlay Info */}
        <div className="relative h-96 sm:h-[500px] w-full">
          <Image
            src={plan.img}
            alt={plan.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
            <button
              onClick={() => router.back()}
              className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition backdrop-blur-sm"
            >
              ← Back
            </button>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">{plan.title}</h1>
            <p className="text-lg text-gray-200 mt-1">{plan.duration}</p>
            <p className="text-2xl font-semibold text-green-300 mt-2">
              {plan.price}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Itinerary */}
          <h2 className="text-2xl font-semibold border-b pb-2 text-gray-800">Itinerary</h2>
          <ul className="mt-4 space-y-4">
            {Array.isArray(plan.details) && plan.details.length > 0 ? (
              plan.details.map((day, index) => (
                <li
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-l-4 border-blue-500"
                >
                  <span className="block font-semibold text-blue-700 text-lg">
                    {day.day}
                  </span>
                  <p className="text-gray-700 mt-2 leading-relaxed">
                    {day.desc || "Details to be announced..."}
                  </p>
                </li>
              ))
            ) : (
              <li className="text-gray-500 italic p-4 bg-yellow-50 rounded-lg">
                Itinerary details will be updated soon. Please contact us for more information.
              </li>
            )}
          </ul>

          {/* Contact Section */}
          <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              📞 Contact to Book
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-lg font-medium text-gray-800">{plan.contact}</p>
                <p className="text-gray-600 mt-1">Call or WhatsApp for booking</p>
              </div>
              <div className="flex gap-3">
                <a
                  href={`tel:${plan.contact.replace(/\s/g, '')}`}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 font-medium"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${plan.contact.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 font-medium"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <button
              onClick={() => router.push("/plans")}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-blue-100 hover:bg-blue-200 transition duration-300"
            >
              ← View All Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}