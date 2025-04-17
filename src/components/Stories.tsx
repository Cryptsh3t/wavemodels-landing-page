
import React, { useState, useRef, useEffect } from "react";

const STORIES_DATA = [
  {
    name: "Катя",
    age: 23,
    city: "Москва",
    income: "120 000 ₽/мес",
    quote: "WAVEMODELS дали мне возможность раскрыть свой потенциал и обрести финансовую независимость.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600&h=700"
  },
  {
    name: "Аня",
    age: 22,
    city: "Казань",
    income: "180 000 ₽/мес",
    quote: "Гибкий график и комфортные условия позволяют мне совмещать работу с учебой и личной жизнью.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600&h=700"
  },
  {
    name: "Вика",
    age: 21,
    city: "СПб",
    income: "240 000 ₽/мес",
    quote: "В WAVEMODELS настоящая семейная атмосфера, всегда поддержат и помогут.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=700"
  },
  {
    name: "Алина",
    age: 25,
    city: "Сочи",
    income: "310 000 ₽/мес",
    quote: "Наконец-то нашла агентство, где уважают личные границы и создают все условия для успеха.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=600&h=700"
  },
  {
    name: "Мария",
    age: 24,
    city: "Новосибирск",
    income: "140 000 ₽/мес",
    quote: "Всего за два месяца работы в WAVEMODELS я смогла полностью погасить кредиты и начать копить на квартиру.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600&h=700"
  },
  {
    name: "Диана",
    age: 22,
    city: "Екатеринбург",
    income: "200 000 ₽/мес",
    quote: "Профессиональная команда, прозрачные условия и своевременные выплаты — всё это WAVEMODELS.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600&h=700"
  },
  {
    name: "София",
    age: 26,
    city: "Краснодар",
    income: "270 000 ₽/мес",
    quote: "Благодаря WAVEMODELS я обрела уверенность в себе и финансовую стабильность.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=700"
  },
  {
    name: "Ника",
    age: 21,
    city: "Воронеж",
    income: "360 000 ₽/мес",
    quote: "В WAVEMODELS я нашла не только высокооплачиваемую работу, но и настоящих друзей среди коллег.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=600&h=700"
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
        
        <div className="relative max-w-6xl mx-auto overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-gold transition-colors duration-300 bg-black/50 rounded-full p-2 md:p-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-gold transition-colors duration-300 bg-black/50 rounded-full p-2 md:p-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          
          {/* Stories Container */}
          <div 
            ref={containerRef}
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {STORIES_DATA.map((story, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] flex-shrink-0 bg-dark/40 rounded-lg overflow-hidden border border-gold/20"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 h-60 md:h-auto relative">
                    <img 
                      src={story.image} 
                      alt={`${story.name} from ${story.city}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 flex flex-col">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {story.name}, {story.age}, {story.city}
                      </h3>
                      <p className="text-gold font-semibold mb-4 flex items-center">
                        <span className="mr-2 text-sm">💼</span> {story.income}
                      </p>
                      <p className="text-white/90 italic mb-6">
                        "{story.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
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
