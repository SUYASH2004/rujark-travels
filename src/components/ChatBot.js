// components/ChatBot.js
import { useState, useEffect, useRef } from 'react';
import { MdClose, MdSend, MdPerson, MdEmail, MdPhone, MdExpandMore } from "react-icons/md";

const services = [
  {
    title: "Adventure Tours",
    img: "/services/adventure.jpeg",
    description: "Experience thrilling adventures with our specially curated adventure tours. From trekking through the Himalayas to scuba diving in pristine waters, we have it all.",
  },
  {
    title: "Pilgrim Tours",
    img: "/services/pilgrim.jpeg",
    description: "Discover spiritual destinations with our pilgrim tours. Visit ancient temples, holy rivers, and sacred sites that inspire peace and devotion.",
  },
  {
    title: "Educational Tours",
    img: "/services/educational.jpeg",
    description: "Our educational tours are designed to combine learning and exploration. Perfect for schools, colleges, and curious minds seeking knowledge.",
  },
  {
    title: "Heritage Tours",
    img: "/services/heritage.jpeg",
    description: "Explore the rich cultural heritage of India and beyond. From historical monuments to UNESCO World Heritage sites, witness the grandeur of history.",
  },
  {
    title: "Tailor Made Tours",
    img: "/services/tailormade.jpeg",
    description: "Create your own travel story with our tailor-made tours. We customize every detail to suit your preferences, making your journey truly unique.",
  },
  {
    title: "Jungle Safari",
    img: "/services/jungle_safari.jpg",
    description: "Explore the wild heart of India with our exciting Jungle Safari tours. Witness the majestic Royal Bengal Tiger, exotic birds, and diverse wildlife in Ranthambore, Jim Corbett, and more, all with expert naturalists.",
  },
  {
    title: "International Tours",
    img: "/services/international.jpg",
    description: "Expand your horizons with our handpicked international tour packages. From the stunning landscapes of Europe to the vibrant cultures of Southeast Asia, Rujark Tours brings the world closer to you with seamless travel planning.",
  },
  {
    title: "My Fair Lady",
    img: "/services/fair_lady.jpg",
    description: "Empowering and safe tours for female travelers. Discover India's beauty with thoughtfully planned itineraries, secure accommodations, and expert female guides for a truly comfortable and memorable journey.",
  }
];

const plans = [
  {
    id: "1",
    title: "Bangalore Tour",
    duration: "3 Days / 2 Nights",
    price: "Contact for prices",
  },
  {
    id: "2",
    title: "Jaipur - Jaisalmer - Sam - Jodhpur Tour",
    duration: "6 Days / 5 Nights",
    price: "Contact for prices",
  },
  {
    id: "3",
    title: "Chandigarh - Manali - Amritsar Tour",
    duration: "6 Days / 5 Nights",
    price: "Contact for pricing",
  },
  {
    id: "4",
    title: "Madurai-Rameshwaram-Karaikudi-Tanjawar-Kumbhakonam-Tirucharapalli Tour",
    duration: "6 days / 5 Nights",
    price: "Contact for prices",
  },
  {
    id: "5",
    title: "Madurai-Rameshwaram-Karaikudi-Tanjawar-Kumbhakonam-Tirucharapalli-Kanchipuram-Tirupati-Tirumala-Kalhasti Tour",
    duration: "Contact for duration",
    price: "Contact for prices",
  },
  {
    id: "6",
    title: "Kashi- Prayagraj -Ayodhya",
    duration: "5 days / 4 nights",
    price: "Contact for prices",
  },
  {
    id: "7",
    title: "Srinagar-Sonmarg-Gulmarg-Pahelgam Tour",
    duration: "6 days / 5 nights",
    price: "Contact for prices",
  },
  {
    id: "8",
    title: "Srinagar-Sonmarg-Gulmarg-Pahelgam-Vaishnavi Devi-Jammu Tour",
    duration: "7 days / 8 nights",
    price: "Contact for prices",
  },
  {
    id: "9",
    title: "Kullu-Manali – Amritsar – Chandigarh – Wagah Border Tour",
    duration: "Contact for duration",
    price: "Contact for prices",
  },
  {
    id: "10",
    title: "Cochin – Munnar – Marayoor Tour",
    duration: "Contact for duration",
    price: "Contact for prices",
  },
  {
    id: "11",
    title: "Bangalore – Mysore Tour",
    duration: "Contact for duration",
    price: "Contact for prices",
  },
  {
    id: "12",
    title: "Jaipur – Jodhpur – Jaisalmer Tour",
    duration: "Contact for duration",
    price: "Contact for prices",
  },
  {
    id: "13",
    title: "Hyderabad City Tour",
    duration: "3 Days / 2 Nights",
    price: "Contact for prices",
  },
  {
    id: "14",
    title: "Ahmedabad Heritage Tour",
    duration: "3 Days / 2 Nights",
    price: "Contact for prices",
  },
  {
    id: "15",
    title: "Hubli and Dandeli Adventure",
    duration: "3 Days / 2 Nights",
    price: "Contact for prices",
  },
  {
    id: "16",
    title: "Halebid – Belur – Shravanabelagola - Hoysala – Hospet – Hampi – Badami – Pattadakal",
    duration: "4 Days / 3 Nights",
    price: "Contact for prices",
  }
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
  const [currentStep, setCurrentStep] = useState('welcome');
  const [showAllPlans, setShowAllPlans] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial welcome message with options
      setMessages([
        {
          id: 1,
          text: "Welcome to Rujark Tours! 🌍✈️ I'm your travel assistant.\n\nI can help you with:\n• Our travel services\n• Tour plans and itineraries\n• Contact information\n\nWhat would you like to know more about?",
          sender: 'bot',
          timestamp: new Date(),
          options: ['Services', 'Tour Plans', 'Contact Us']
        }
      ]);
      // Start collecting user info immediately
      setCurrentStep('awaiting_name');
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: 2,
          text: "First, let me get to know you better! What's your name?",
          sender: 'bot',
          timestamp: new Date()
        }]);
      }, 1000);
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Bot response logic
    setTimeout(() => {
      handleBotResponse(inputMessage.toLowerCase());
    }, 1000);
  };

  const handleBotResponse = (userInput) => {
    let botResponse = {};

    if (currentStep === 'awaiting_name') {
      setUserInfo(prev => ({ ...prev, name: userInput }));
      setCurrentStep('awaiting_email');
      botResponse = {
        id: messages.length + 2,
        text: `Nice to meet you, ${userInput}! What's your email address?`,
        sender: 'bot',
        timestamp: new Date()
      };
    } else if (currentStep === 'awaiting_email') {
      setUserInfo(prev => ({ ...prev, email: userInput }));
      setCurrentStep('awaiting_phone');
      botResponse = {
        id: messages.length + 2,
        text: "Great! And what's your phone number?",
        sender: 'bot',
        timestamp: new Date()
      };
    } else if (currentStep === 'awaiting_phone') {
      setUserInfo(prev => ({ ...prev, phone: userInput }));
      setCurrentStep('completed');
      botResponse = {
        id: messages.length + 2,
        text: `Thank you, ${userInfo.name}! We've saved your information. How can I assist you with your travel plans?`,
        sender: 'bot',
        timestamp: new Date(),
        options: ['Services', 'Tour Plans', 'Contact Us', 'End Conversation']
      };
    } else if (userInput.includes('service') || userInput.includes('tour') || userInput.includes('package')) {
      showServices();
      return;
    } else if (userInput.includes('plan') || userInput.includes('itinerary')) {
      showPlans();
      return;
    } else if (userInput.includes('contact') || userInput.includes('call') || userInput.includes('email')) {
      showContactInfo();
      return;
    } else if (userInput.includes('end') || userInput.includes('bye') || userInput.includes('goodbye')) {
      endConversation();
      return;
    } else {
      botResponse = {
        id: messages.length + 2,
        text: "I can help you with:\n• Our travel services\n• Tour plans and itineraries\n• Contact information\n\nWhat would you like to know more about?",
        sender: 'bot',
        timestamp: new Date(),
        options: ['Services', 'Tour Plans', 'Contact Us', 'End Conversation']
      };
    }

    if (Object.keys(botResponse).length > 0) {
      setMessages(prev => [...prev, botResponse]);
    }
  };

  const handleQuickReply = (option) => {
    const userMessage = {
      id: messages.length + 1,
      text: option,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      switch (option) {
        case 'Services':
          showServices();
          break;
        case 'Tour Plans':
          showPlans();
          break;
        case 'Contact Us':
          showContactInfo();
          break;
        case 'End Conversation':
          endConversation();
          break;
        case 'Show More Plans':
          setShowAllPlans(true);
          showPlans(true);
          break;
        default:
          handleBotResponse(option.toLowerCase());
      }
    }, 1000);
  };

  const showServices = () => {
    const servicesMessage = {
      id: messages.length + 2,
      text: "Here are our travel services:",
      sender: 'bot',
      timestamp: new Date(),
      services: services.slice(0, 4) // Show first 4 services
    };
    setMessages(prev => [...prev, servicesMessage]);
    
    // Add options after showing services
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: messages.length + 3,
        text: "Would you like to know more about any specific service or explore tour plans?",
        sender: 'bot',
        timestamp: new Date(),
        options: ['Tour Plans', 'Contact Us', 'End Conversation']
      }]);
    }, 500);
  };

  const showPlans = (showAll = false) => {
    const plansToShow = showAll ? plans : plans.slice(0, 3);
    const plansMessage = {
      id: messages.length + 2,
      text: showAll ? "Here are all our tour plans:" : "Here are our popular tour plans:",
      sender: 'bot',
      timestamp: new Date(),
      plans: plansToShow,
      showMore: !showAll && plans.length > 3
    };
    setMessages(prev => [...prev, plansMessage]);
    
    // Add options after showing plans
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: messages.length + 3,
        text: "Would you like to explore our services or get contact information?",
        sender: 'bot',
        timestamp: new Date(),
        options: ['Services', 'Contact Us', 'End Conversation']
      }]);
    }, 500);
  };

  const showContactInfo = () => {
    const contactMessage = {
      id: messages.length + 2,
      text: "📞 Contact Rujark Tours:\n\nPhone: +91 95588 29696\nEmail: rujarktours@gmail.com\nLocation: Talegaon Dabhade, Pune\n\nWe're here to help you plan your perfect journey! 🗺️",
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, contactMessage]);
    
    // Add options after showing contact info
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: messages.length + 3,
        text: "Is there anything else I can help you with?",
        sender: 'bot',
        timestamp: new Date(),
        options: ['Services', 'Tour Plans', 'End Conversation']
      }]);
    }, 500);
  };

  const endConversation = () => {
    const endMessage = {
      id: messages.length + 2,
      text: `Thank you for chatting with Rujark Tours, ${userInfo.name || 'valued traveler'}! 🎉\n\nWe hope to see you on one of our amazing journeys soon!\n\nFeel free to reach out anytime. Safe travels! ✈️🌍`,
      sender: 'bot',
      timestamp: new Date(),
      options: ['Start New Conversation']
    };
    setMessages(prev => [...prev, endMessage]);
  };

  const startNewConversation = () => {
    setMessages([]);
    setUserInfo({ name: '', email: '', phone: '' });
    setCurrentStep('welcome');
    setShowAllPlans(false);
    
    // Trigger the welcome message again
    setTimeout(() => {
      setMessages([
        {
          id: 1,
          text: "Welcome to Rujark Tours! 🌍✈️ I'm your travel assistant.\n\nI can help you with:\n• Our travel services\n• Tour plans and itineraries\n• Contact information\n\nWhat would you like to know more about?",
          sender: 'bot',
          timestamp: new Date(),
          options: ['Services', 'Tour Plans', 'Contact Us']
        }
      ]);
      setCurrentStep('awaiting_name');
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: 2,
          text: "First, let me get to know you better! What's your name?",
          sender: 'bot',
          timestamp: new Date()
        }]);
      }, 1000);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
        >
          <div className="w-6 h-6">💬</div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                ✈️
              </div>
              <div>
                <h3 className="font-bold">Rujark Tours</h3>
                <p className="text-sm opacity-90">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <MdClose size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block max-w-[80%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                  
                  {/* Services */}
                  {message.services && (
                    <div className="mt-3 space-y-2">
                      {message.services.map((service, index) => (
                        <div key={index} className="bg-gray-50 p-2 rounded-lg border">
                          <h4 className="font-semibold text-yellow-600">{service.title}</h4>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Plans */}
                  {message.plans && (
                    <div className="mt-3 space-y-2">
                      {message.plans.map((plan) => (
                        <div key={plan.id} className="bg-gray-50 p-2 rounded-lg border">
                          <h4 className="font-semibold text-orange-600">{plan.title}</h4>
                          <p className="text-sm text-gray-600">{plan.duration} • {plan.price}</p>
                        </div>
                      ))}
                      {message.showMore && (
                        <button
                          onClick={() => handleQuickReply('Show More Plans')}
                          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <MdExpandMore />
                          Show More Plans
                        </button>
                      )}
                    </div>
                  )}

                  {/* Quick Replies */}
                  {message.options && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickReply(option)}
                          className={`text-sm px-3 py-1 rounded-full transition-colors ${
                            option === 'End Conversation' || option === 'Start New Conversation'
                              ? 'bg-red-500 hover:bg-red-600 text-white'
                              : 'bg-yellow-400 hover:bg-yellow-500 text-white'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-yellow-400"
                disabled={currentStep === 'completed' && messages[messages.length - 1]?.options?.includes('Start New Conversation')}
              />
              <button
                onClick={handleSendMessage}
                disabled={currentStep === 'completed' && messages[messages.length - 1]?.options?.includes('Start New Conversation')}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MdSend size={20} />
              </button>
            </div>
            <div className="text-xs text-gray-500 text-center mt-2">
              {userInfo.name && `Chatting as: ${userInfo.name}`}
            </div>
          </div>
        </div>
      )}
    </>
  );
}