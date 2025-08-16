const plans = [
  {
    id: "1",
    title: "Bangalore Tour",
    img: "/plans/banglore1.jpg",
    duration: "3 Days / 2 Nights",
    price: "₹7,000 (SL) / ₹8,500 (AC)",
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
    price: "₹17,000 (3AC) / ₹14,500 (SL)",
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
    details: [
      {
        day: "Day 1",
        desc: ""
      },
    ],
    contact: "+91 95588 29696"
  },
  {
    id: "12 ",
    title: "Jaipur – Jodhpur – Jaisalmer Tour",
    img: "/plans/jodhpur1.jpg",
    duration: "Contact for duration",
    price: "Contact for prices",
    details: [
      {
        day: "Day 1",
        desc: ""
      },
    ],
    contact: "+91 95588 29696"
  }
];

export default plans;