
import React, { useState, useRef, useEffect } from "react";

const STORIES_DATA = [
  {
    name: "Катя",
    age: 23,
    city: "Москва",
    income: "120 000 ₽/мес",
    quote: "Здесь мне дали мне возможность раскрыть свой потенциал и обрести финансовую независимость.",
    image: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Аня",
    age: 22,
    city: "Казань",
    income: "180 000 ₽/мес",
    quote: "Гибкий график и комфортные условия позволяют мне совмещать работу с учебой и личной жизнью.",
    image: "https://images.pexels.com/photos/921646/pexels-photo-921646.jpeg"
  },
  {
    name: "Вика",
    age: 21,
    city: "СПб",
    income: "240 000 ₽/мес",
    quote: "Здесь настоящая семейная атмосфера, всегда поддержат и помогут со всем, здесь никого не осуждают.",
    image: "https://images.pexels.com/photos/60712/fashion-girl-sexy-women-60712.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Алина",
    age: 25,
    city: "Сочи",
    income: "310 000 ₽/мес",
    quote: "Наконец-то нашла агентство, где уважают личные границы и создают все условия для успеха, где есть карьерный рост.",
    image: "https://images.pexels.com/photos/31182152/pexels-photo-31182152/free-photo-of-elegant-fashion-portrait-with-studio-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Мария",
    age: 24,
    city: "Новосибирск",
    income: "140 000 ₽/мес",
    quote: "Всего за два месяца работы в WAVEMODELS я смогла полностью погасить кредиты и начать копить на квартиру.",
    image: "https://images.pexels.com/photos/15579743/pexels-photo-15579743/free-photo-of-model-with-glamour-makeup.jpeg"
  },
  {
    name: "Диана",
    age: 22,
    city: "Екатеринбург",
    income: "200 000 ₽/мес",
    quote: "Профессиональная команда, прозрачные условия для работы и хорошие своевременные выплаты - всё это WAVEMODELS.",
    image: "https://images.pexels.com/photos/17243576/pexels-photo-17243576/free-photo-of-a-woman-in-white-jeans-and-a-black-top.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "София",
    age: 26,
    city: "Краснодар",
    income: "270 000 ₽/мес",
    quote: "Благодаря WAVEMODELS я обрела уверенность в себе и финансовую стабильность, также нашла себе новых друзей.",
    image: "https://images.pexels.com/photos/7354819/pexels-photo-7354819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Ника",
    age: 21,
    city: "Воронеж",
    income: "360 000 ₽/мес",
    quote: "В WAVEMODELS я нашла не только высокооплачиваемую работу, но и настоящих друзей среди коллег.",
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
          <div 
            className="relative min-h-[680px] md:min-h-[480px] overflow-hidden rounded-xl bg-black/50 border border-gold/20"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={containerRef}
          >
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
                <div className="h-[300px] md:w-1/2 md:h-[480px]">
                  <img 
                    src={story.image} 
                    alt={`${story.name} from ${story.city}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <p className="text-lg md:text-xl mb-4 md:mb-6 italic">"{story.quote}"</p>
                  <div className="space-y-2">
                    <h3 className="text-base md:text-lg font-semibold">
                      {story.name}, {story.age}, {story.city}
                    </h3>
                    <p className="text-gold font-bold flex items-center text-base md:text-lg">
                      <span className="mr-2">💼</span>
                      {story.income}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation */}
          <div className="absolute top-[40%] md:top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-10 px-4">
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
