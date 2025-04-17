
import React, { useState, useRef, useEffect } from "react";

const STORIES_DATA = [
  {
    name: "Катя",
    age: 23,
    city: "Москва",
    income: "120 000 ₽/мес",
    quote: "Здесь настоящая семейная атмосфера, всегда поддержат и помогут.",
    image: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Аня",
    age: 22,
    city: "Казань",
    income: "180 000 ₽/мес",
    quote: "Здесь настоящая семейная атмосфера, всегда поддержат и помогут.",
    image: "https://images.pexels.com/photos/921646/pexels-photo-921646.jpeg"
  },
  {
    name: "Вика",
    age: 21,
    city: "СПб",
    income: "240 000 ₽/мес",
    quote: "Здесь настоящая семейная атмосфера, всегда поддержат и помогут.",
    image: "https://images.pexels.com/photos/60712/fashion-girl-sexy-women-60712.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Алина",
    age: 25,
    city: "Сочи",
    income: "310 000 ₽/мес",
    quote: "Здесь настоящая семейная атмосфера, всегда поддержат и помогут.",
    image: "https://images.pexels.com/photos/31182152/pexels-photo-31182152/free-photo-of-elegant-fashion-portrait-with-studio-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Мария",
    age: 24,
    city: "Новосибирск",
    income: "140 000 ₽/мес",
    quote: "Здесь настоящая семейная атмосфера, всегда поддержат и помогут.",
    image: "https://images.pexels.com/photos/15579743/pexels-photo-15579743/free-photo-of-model-with-glamour-makeup.jpeg"
  },
  {
    name: "Диана",
    age: 22,
    city: "Екатеринбург",
    income: "200 000 ₽/мес",
    quote: "Здесь настоящая семейная атмосфера, всегда поддержат и помогут.",
    image: "https://images.pexels.com/photos/30698454/pexels-photo-30698454/free-photo-with-seashell-aesthetics.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "София",
    age: 26,
    city: "Краснодар",
    income: "270 000 ₽/мес",
    quote: "Здесь настоящая семейная атмосфера, всегда поддержат и помогут.",
    image: "https://images.pexels.com/photos/7354819/pexels-photo-7354819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Ника",
    age: 21,
    city: "Воронеж",
    income: "360 000 ₽/мес",
    quote: "Здесь настоящая семейная атмосфера, всегда поддержат и помогут.",
    image: "https://images.pexels.com/photos/13448790/pexels-photo-13448790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Stories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % STORIES_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + STORIES_DATA.length) % STORIES_DATA.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    } else if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  };

  useEffect(() => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
    }
    
    autoPlayRef.current = setTimeout(() => {
      handleNext();
    }, 5000);
    
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [activeIndex]);

  return (
    <section id="stories" className="py-20 bg-gradient-to-b from-black/95 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-gold text-3xl md:text-4xl font-bold mb-16 text-center">Истории успеха</h2>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Main Stories Slider */}
          <div className="relative min-h-[420px] overflow-hidden rounded-xl bg-black/50 border border-gold/20">
            {STORIES_DATA.map((story, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col md:flex-row transition-all duration-700 ease-in-out ${
                  activeIndex === index 
                    ? "opacity-100 translate-x-0" 
                    : activeIndex > index 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                }`}
              >
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img 
                    src={story.image} 
                    alt={`${story.name} from ${story.city}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 flex flex-col justify-center">
                  <p className="text-xl mb-6 italic">"{story.quote}"</p>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">
                      {story.name}, {story.age}, {story.city}
                    </h3>
                    <p className="text-gold font-bold flex items-center">
                      <span className="mr-2">💼</span>
                      {story.income}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-10 px-4">
            <button
              onClick={handlePrev}
              className="bg-black/70 hover:bg-gold/90 transition-colors duration-300 rounded-full p-2 text-white hover:text-dark"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="bg-black/70 hover:bg-gold/90 transition-colors duration-300 rounded-full p-2 text-white hover:text-dark"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {STORIES_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-gold w-6" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;

