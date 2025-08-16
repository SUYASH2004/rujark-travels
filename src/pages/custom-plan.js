import { useState } from "react";
import Link from "next/link";

export default function CustomPlan() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    contact: "",
    email: "",
    days: "",
    pickup: "",
    locations: [""], // ✅ start with one location
  });

  // Handle input change for normal fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle location changes
  const handleLocationChange = (index, value) => {
    const updatedLocations = [...formData.locations];
    updatedLocations[index] = value;
    setFormData({ ...formData, locations: updatedLocations });
  };

  // Add a new location (max 10)
  const addLocation = () => {
    if (formData.locations.length < 10) {
      setFormData({ ...formData, locations: [...formData.locations, ""] });
    } else {
      alert("⚠️ You can only add up to 10 locations.");
    }
  };

  // Validate before submit
  const validateForm = () => {
    // check all fields
    if (
      !formData.name.trim() ||
      !formData.title.trim() ||
      !formData.contact.trim() ||
      !formData.email.trim() ||
      !formData.days.trim() ||
      !formData.pickup.trim()
    ) {
      return false;
    }

    // check all locations
    for (let loc of formData.locations) {
      if (!loc.trim()) return false;
    }

    return true;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("⚠️ Please fill in all fields and locations.");
      return;
    }

    try {
      const res = await fetch("/api/custom-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Your plan was submitted!");
        setFormData({
          name: "",
          title: "",
          contact: "",
          email: "",
          days: "",
          pickup: "",
          locations: [""],
        });
      } else {
        alert("❌ Failed to submit plan.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Error submitting form.");
    }
  };

  return (
    <div className="bg-gray-100 py-12 px-6 min-h-screen relative">
      {/* ✅ Back Button at top-left */}
      <div className="absolute top-4 left-4">
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-center text-yellow-500 mb-8">
        Rujark Special Custom Plan Service
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg space-y-5"
      >
        {/* Name */}
        <div>
          <label className="block mb-2 font-semibold">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
        </div>

        {/* Tour Title */}
        <div>
          <label className="block mb-2 font-semibold">Tour Title</label>
          <input
            type="text"
            name="title"
            placeholder="Give your tour a title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
        </div>

        {/* Contact Info */}
        <div>
          <label className="block mb-2 font-semibold">Contact Info</label>
          <input
            type="text"
            name="contact"
            placeholder="Phone or WhatsApp"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-semibold">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
        </div>

        {/* Days */}
        <div>
          <label className="block mb-2 font-semibold">Number of Days</label>
          <input
            type="number"
            name="days"
            placeholder="e.g. 5"
            value={formData.days}
            onChange={handleChange}
            required
            min="1"
            className="w-full p-3 border rounded"
          />
        </div>

        {/* Pickup Location */}
        <div>
          <label className="block mb-2 font-semibold">Pickup Location</label>
          <input
            type="text"
            name="pickup"
            placeholder="Where should we pick you up?"
            value={formData.pickup}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
        </div>

        {/* Locations dynamic list */}
        <div className="space-y-3">
          <label className="block font-semibold">Tour Locations</label>
          {formData.locations.map((loc, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Location ${index + 1}`}
              value={loc}
              onChange={(e) => handleLocationChange(index, e.target.value)}
              required
              className="w-full p-3 border rounded"
            />
          ))}

          {formData.locations.length < 10 && (
            <button
              type="button"
              onClick={addLocation}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
            >
              ➕ Add Location
            </button>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-yellow-400 to-orange-500 w-full py-3 rounded text-white font-semibold hover:bg-orange-600 transition"
        >
          Submit Plan
        </button>
      </form>
    </div>
  );
}
