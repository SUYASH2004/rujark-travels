import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Your plans data with keywords
const plans = [
  {
    id: "1",
    title: "Bangalore Tour",
    img: "/plans/banglore1.jpg",
    duration: "3 Days / 2 Nights",
    price: "Contact for prices",
    keywords: ["Bangalore", "Bengaluru", "Mysore", "Mysuru", "KSR Bengaluru", "Tipu Sultan Palace", "Cubbon Park", "Commercial Street", "Botanical Garden", "Visvesvaraya Museum"],
    details: [
      {
        day: "Day 1",
        desc: "Pickup from KSR Bengaluru Railway Station, refreshment & breakfast, industrial visit, lunch, Bengaluru sightseeing (Botanical Garden, Visvesvaraya Museum), dinner."
      },
      {
        day: "Day 2",
        desc: "Checkout from hotel, proceed to Mysore, breakfast, Mysore sightseeing (Mysuru Palace, St. Philomena's Church, Jagan Mohan Art Gallery, Balmuri Falls, Brindavan Garden & Park), lunch, DJ Night, dinner, stay at Mysore."
      },
      {
        day: "Day 3",
        desc: "Checkout from hotel, proceed to Bengaluru, breakfast, Bengaluru sightseeing (Tipu Sultan Palace), lunch, Bengaluru sightseeing (Cubbon Park, Commercial Street shopping), dinner, drop at KSR Bengaluru Railway Station by 7:30 PM."
      }
    ],
    contact: "+91 95588 29696"
  },
  {
    id: "2",
    title: "Jaipur - Jaisalmer - Sam - Jodhpur Tour",
    img: "/plans/jaipur1.jpg",
    duration: "6 Days / 5 Nights",
    price: "Contact for prices",
    keywords: ["Jaipur", "Jaisalmer", "Sam", "Jodhpur", "Albert Hall", "Birla Temple", "City Palace", "Jantar Mantar", "Hawa Mahal", "Amer Fort", "Jal Mahal", "Sam Sand Dunes", "Sonar Fort", "Gadsisar Lake", "Patwon Ki Haveli", "Umaid Bhawan", "Mehrangarh Fort", "Jaswant Thada"],
    details: [
      {
        day: "Day 1",
        desc: "Jaipur Arrival & Sightseeing – Arrive at Jaipur Railway Station, check-in at hotel, visit Albert Hall & Birla Temple. Dinner & overnight stay. (Meal: Dinner)"
      },
      {
        day: "Day 2",
        desc: "Jaipur Sightseeing – Sam Sand Dunes – Breakfast, checkout, visit City Palace, Jantar Mantar, Hawa Mahal (outer view), Amer Fort, Jal Mahal. Evening departure to Sam. (Meal: Breakfast, Lunch, Dinner)"
      },
      {
        day: "Day 3",
        desc: "Sam Sand Dunes – Lunch, camel ride, sunset view, cultural program, campfire & DJ party. Dinner & overnight in camp. (Meal: Breakfast, Lunch, Dinner)"
      },
      {
        day: "Day 4",
        desc: "Sam – Jaisalmer – Breakfast, checkout, visit Sonar Fort, Gadsisar Lake, Patwon Ki Haveli. Dinner & overnight stay. (Meal: Breakfast, Lunch, Dinner)"
      },
      {
        day: "Day 5",
        desc: "Jaisalmer – Jodhpur – Breakfast, checkout, visit Umaid Bhawan, Mehrangarh Fort, Jaswant Thada. Dinner & overnight stay. (Meal: Breakfast, Lunch, Dinner)"
      },
      {
        day: "Day 6",
        desc: "Breakfast, checkout & drop at Jodhpur Railway Station."
      }
    ],
    contact: "+91 95588 29696"
  },
  {
    id: "3",
    title: "Chandigarh - Manali - Amritsar Tour",
    img: "/plans/manali1.jpg",
    duration: "6 Days / 5 Nights",
    price: "Contact for pricing",
    keywords: ["Chandigarh", "Manali", "Amritsar", "Kullu", "Rock Garden", "Rose Garden", "Hadimba Devi Temple", "Club House", "Tibetan Monastery", "Van Vihar", "Mall Road", "Solang Valley", "Beas River", "Angora Farm", "Vaishno Devi Temple", "Golden Temple", "Jallianwala Bagh", "Wagah Border"],
    details: [
      {
        day: "Day 1",
        desc: "Chandigarh to Manali – Arrival at Chandigarh, sightseeing (Rock Garden, Rose Garden), evening drive to Manali (overnight journey, no meal)."
      },
      {
        day: "Day 2",
        desc: "Manali arrival & local sightseeing – Hadimba Devi Temple, Club House, Tibetan Monastery, Van Vihar (ticket not included), Mall Road. Dinner & overnight stay. (Meal: Dinner)"
      },
      {
        day: "Day 3",
        desc: "Full day trip to Solang Valley – Scenic beauty, snow activities. Dinner & overnight stay. (Meal: Breakfast, Dinner)"
      },
      {
        day: "Day 4",
        desc: "Manali – Kullu – Amritsar – River rafting in Beas River, Angora Farm, Vaishno Devi Temple, Kullu Shawl Industry. Evening drive to Amritsar (overnight journey). (Meal: Breakfast)"
      },
      {
        day: "Day 5",
        desc: "Amritsar sightseeing – Golden Temple, Jallianwala Bagh, Wagah Border ceremony. Dinner & overnight stay. (Meal: Dinner)"
      },
      {
        day: "Day 6",
        desc: "Amritsar to Pune by train."
      }
    ],
    contact: "+91 95588 29696"
  },
  {
    id: "4",
    title: "Madurai-Rameshwaram-Karaikudi-Tanjawar-Kumbhakonam-Tirucharapalli Tour",
    img: "/plans/rameshwaram1.jpg",
    duration: "6 days n 5 Night",
    price: "Contact for prices",
    keywords: ["Madurai", "Rameshwaram", "Karaikudi", "Tanjavur", "Tanjawar", "Kumbhakonam", "Tiruchirapalli"],
    details: [
      {
        day: "Day 1",
        desc: ""
      },
    ],
    contact: "+91 95588 29696"
  },
  {
    id: "5",
    title: "Madurai-Rameshwaram-Karaikudi-Tanjawar-Kumbhakonam-Tirucharapalli-Kanchipuram-Tirupati-Tirumala-Kalhasti Tour",
    img: "/plans/kanchipuram1.jpg",
    duration: "Contact for duration",
    price: "Contact for prices",
    keywords: ["Madurai", "Rameshwaram", "Karaikudi", "Tanjavur", "Tanjawar", "Kumbhakonam", "Tiruchirapalli", "Kanchipuram", "Tirupati", "Tirumala", "Kalahasti"],
    details: [
      {
        day: "Day 1",
        desc: ""
      },
    ],
    contact: "+91 95588 29696"
  },
  {
    id: "6",
    title: "Kashi- Prayagraj -Ayodhya",
    img: "/plans/kashi1.jpg",
    duration: "5 days and 4 night",
    price: "Contact for prices",
    keywords: ["Kashi", "Varanasi", "Prayagraj", "Allahabad", "Ayodhya"],
    details: [
      {
        day: "Day 1",
        desc: ""
      },
    ],
    contact: "+91 95588 29696"
  },
  {
    id: "7",
    title: "Srinagar-Sonmarg-Gulmarg-Pahelgam Tour",
    img: "/plans/shrinagar1.jpg",
    duration: "6 days and 5 night",
    price: "Contact for prices",
    keywords: ["Srinagar", "Sonmarg", "Gulmarg", "Pahalgam", "Pahelgam"],
    details: [
      {
        day: "Day 1",
        desc: ""
      },
    ],
    contact: "+91 95588 29696"
  },
  {
    id: "8",
    title: "Srinagar-Sonmarg-Gulmarg-Pahelgam-Vaishnavi Devi-Jammu Tour",
    img: "/plans/gulmarg1.jpg",
    duration: "7 days and 8 night",
    price: "Contact for prices",
    keywords: ["Srinagar", "Sonmarg", "Gulmarg", "Pahalgam", "Pahelgam", "Vaishnavi Devi", "Jammu"],
    details: [
      {
        day: "Day 1",
        desc: ""
      },
    ],
    contact: "+91 95588 29696"
  },
  {
    id: "9",
    title: "Kullu-Manali – Amritsar – Chandigarh – Wagah Border Tour",
    img: "/plans/amritsar1.jpg",
    duration: "Contact for duration",
    price: "Contact for prices",
    keywords: ["Kullu", "Manali", "Amritsar", "Chandigarh", "Wagah Border"],
    details: [
      {
        day: "Day 1",
        desc: ""
      },
    ],
    contact: "+91 95588 29696"
  },
  {
    id: "10",
    title: "Cochin – Munnar – Marayoor Tour",
    img: "/plans/coochin1.jpg",
    duration: "Contact for duration",
    price: "Contact for prices",
    keywords: ["Cochin", "Kochi", "Munnar", "Marayoor", "Ernakulam", "Sandalwood forest", "Jaggery factory", "Katcharam waterfalls", "Tea factory", "Mattupetty Dam", "Kundala Dam", "Top Station"],
    details: [
      {
        day: "Day 1",
        desc: "Departure from Pune on 6/02/2025 at 23:30 PM."
      },
      {
        day: "Day 2",
        desc: "Traveling on 7/02/2025.  "
      },
      {
        day: "Day 3",
        desc: "Marayoor (8/02/2025) - Early morning pick-up from Ernakulam Town railway station. After pick-up, proceed to Marayoor. Refreshment and breakfast provided. Marayoor-Kanthaloor sightseeing includes: Sandalwood forest, Jaggery factory, Brammaram shooting point, Katcharam waterfalls, Honey rock viewpoint, Farmhouse visit, Murugan Para off-road safari. Lunch will be provided during sightseeing. Evening campfire and music. Dinner and stay at Marayoor."
      },
      {
        day: "Day 4",
        desc: "Munnar (9/02/2025) - Morning checkout from the hotel and proceed to Munnar. Breakfast provided. Munnar sightseeing includes: Photo point, Flower garden, Tea factory shopping, Mattupetty Dam. Lunch during sightseeing. Continue Munnar sightseeing: Kundala Dam and Lake, Eco Point, Top Station. Dinner and overnight stay at Adimaly."
      },
      {
        day: "Day 5",
        desc: "Cochin (10/02/2025) - Morning checkout from the hotel. Breakfast provided. Industrial visit to KEL Electronic Company followed by Marine Drive DJ boating. Lunch after activities. Drop-off at Ernakulam Town railway station."
      },
      {
        day: "Day 6",
        desc: "Traveling back to Pune on 11/02/2025."
      }
    ],
    contact: "+91 95588 29696"
  },
  {
    id: "11",
    title: "Bangalore – Mysore Tour",
    img: "/plans/Mysuru1.jpg",
    duration: "Contact for duration",
    price: "Contact for prices",
    keywords: ["Bangalore", "Bengaluru", "Mysore", "Mysuru"],
    details: [
      {
        day: "Day 1",
        desc: ""
      },
    ],
    contact: "+91 95588 29696"
  },
  {
    id: "12",
    title: "Jaipur – Jodhpur – Jaisalmer Tour",
    img: "/plans/jodhpur1.jpg",
    duration: "Contact for duration",
    price: "Contact for prices",
    keywords: ["Jaipur", "Jodhpur", "Jaisalmer"],
    details: [
      {
        day: "Day 1",
        desc: ""
      },
    ],
    contact: "+91 95588 29696"
  }
];

export default function Navbar({ bgWhite = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Base link color (normal state)
  const baseColor = bgWhite ? "text-black" : "text-white";

  // Gradient hover effect
  const hoverGradient =
    "hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 hover:text-transparent hover:bg-clip-text transition duration-300";

  const logoColor = bgWhite ? "text-yellow-500" : "text-yellow-400";

  // Enhanced search functionality with keywords
  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    
    const filteredPlans = plans.filter(plan => {
      // Search in title
      if (plan.title.toLowerCase().includes(lowercaseQuery)) {
        return true;
      }
      
      // Search in duration
      if (plan.duration.toLowerCase().includes(lowercaseQuery)) {
        return true;
      }
      
      // Search in description text
      const descriptionText = plan.details.map(detail => detail.desc).join(' ');
      if (descriptionText.toLowerCase().includes(lowercaseQuery)) {
        return true;
      }
      
      // Search in keywords (NEW)
      if (plan.keywords && plan.keywords.some(keyword => 
        keyword.toLowerCase().includes(lowercaseQuery)
      )) {
        return true;
      }
      
      return false;
    });

    setSearchResults(filteredPlans);
  };

  // Function to extract matching keywords for display
  const getMatchingKeywords = (plan, query) => {
    if (!plan.keywords) return [];
    const lowercaseQuery = query.toLowerCase();
    return plan.keywords.filter(keyword => 
      keyword.toLowerCase().includes(lowercaseQuery)
    );
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchOpen && !event.target.closest('.search-container')) {
        setSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchOpen]);

  const navItems = ["Home", "About", "Services", "Plans", "Custom Plan", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 md:p-6 z-50 ${
        bgWhite ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center`}
        >
          <div className="relative w-32 h-20 md:w-36 md:h-24">
            <Image
              src="/logo.png"
              alt="Rujark Tours and Travels LLP"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-24 items-center">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-") === "home" ? "" : item.toLowerCase().replace(" ", "-")}`}
              className={`text-xl font-bold ${baseColor} ${hoverGradient}`}
            >
              {item}
            </Link>
          ))}
          
          {/* Search Button - Desktop */}
          <div className="search-container relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`text-xl font-bold ${baseColor} ${hoverGradient} flex items-center gap-2`}
            >
              🔍 Search
            </button>

            {/* Search Dropdown */}
            {searchOpen && (
              <div className={`absolute top-full right-0 mt-2 w-96 rounded-lg shadow-lg p-4 ${
                bgWhite ? "bg-white border border-gray-200" : "bg-gray-900 border border-gray-700"
              }`}>
                <input
                  type="text"
                  placeholder="Search plans or locations..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className={`w-full p-3 rounded border text-black placeholder-gray-500 ${
                    bgWhite 
                      ? "bg-white border-gray-300" 
                      : "bg-white border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                  autoFocus
                />

                {/* Search Suggestions */}
                {searchQuery.length > 0 && searchQuery.length < 3 && (
                  <div className="mt-2 text-sm text-gray-500">
                    Type at least 3 characters for better results...
                  </div>
                )}

                {/* Search Results */}
                {searchResults.length > 0 && (
                  <div className={`mt-2 max-h-60 overflow-y-auto rounded ${
                    bgWhite ? "bg-white" : "bg-gray-100"
                  }`}>
                    {searchResults.map((plan) => {
                      const matchingKeywords = getMatchingKeywords(plan, searchQuery);
                      return (
                        <Link
                          key={plan.id}
                          href={`/plans/${plan.id}`}
                          className={`block p-3 border-b text-black hover:bg-gray-200 transition duration-200 ${
                            bgWhite ? "border-gray-200" : "border-gray-300"
                          }`}
                          onClick={() => {
                            setSearchOpen(false);
                            setSearchQuery("");
                            setSearchResults([]);
                          }}
                        >
                          <div className="font-semibold">{plan.title}</div>
                          <div className="text-sm text-gray-600">{plan.duration}</div>
                          {matchingKeywords.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {matchingKeywords.slice(0, 3).map(keyword => (
                                <span key={keyword} className="px-1 py-0.5 bg-green-100 text-green-800 text-xs rounded">
                                  {keyword}
                                </span>
                              ))}
                              {matchingKeywords.length > 3 && (
                                <span className="px-1 py-0.5 bg-blue-100 text-blue-800 text-xs rounded">
                                  +{matchingKeywords.length - 3} more
                                </span>
                              )}
                            </div>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}

                {searchQuery && searchResults.length === 0 && searchQuery.length >= 3 && (
                  <div className={`mt-2 p-3 text-center rounded ${
                    bgWhite ? "bg-gray-100 text-gray-600" : "bg-gray-100 text-gray-600"
                  }`}>
                    desc: {"No plans found matching"
                    + "{searchQuery}"}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button and Search */}
        <div className="flex md:hidden items-center gap-4">
          {/* Search Button - Mobile */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className={`text-2xl ${baseColor}`}
          >
            🔍
          </button>

          {/* Mobile Menu Button */}
          <button
            className={`text-3xl ${logoColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Search Dropdown */}
      {searchOpen && (
        <div className={`md:hidden mt-4 p-4 rounded-lg shadow-md ${
          bgWhite ? "bg-white border border-gray-200" : "bg-gray-900 border border-gray-700"
        }`}>
          <input
            type="text"
            placeholder="Search plans or locations..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            autoFocus
          />

          {/* Search Results for Mobile */}
          {searchResults.length > 0 && (
            <div className="mt-2 max-h-60 overflow-y-auto rounded bg-gray-100">
              {searchResults.map((plan) => {
                const matchingKeywords = getMatchingKeywords(plan, searchQuery);
                return (
                  <Link
                    key={plan.id}
                    href={`/plans/${plan.id}`}
                    className="block p-3 border-b border-gray-300 text-black hover:bg-gray-200 transition duration-200"
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                      setSearchResults([]);
                    }}
                  >
                    <div className="font-semibold">{plan.title}</div>
                    <div className="text-sm text-gray-600">{plan.duration}</div>
                    {matchingKeywords.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {matchingKeywords.slice(0, 2).map(keyword => (
                          <span key={keyword} className="px-1 py-0.5 bg-green-100 text-green-800 text-xs rounded">
                            {keyword}
                          </span>
                        ))}
                        {matchingKeywords.length > 2 && (
                          <span className="px-1 py-0.5 bg-blue-100 text-blue-800 text-xs rounded">
                            +{matchingKeywords.length - 2} more
                          </span>
                        )}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          )}

          {searchQuery && searchResults.length === 0 && searchQuery.length >= 3 && (
            <div className="mt-2 p-3 text-center bg-gray-100 text-gray-600 rounded">
              desc:{"No plans found matching" + "{searchQuery}"}
            </div>
          )}
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className={`md:hidden mt-4 flex flex-col space-y-4 p-4 rounded-lg shadow-md ${
            bgWhite ? "bg-white" : "bg-black/80"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-") === "home" ? "" : item.toLowerCase().replace(" ", "-")}`}
              className={`text-lg font-bold ${baseColor} ${hoverGradient}`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}