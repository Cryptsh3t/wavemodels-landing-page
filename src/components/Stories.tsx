
import React, { useState, useRef, useEffect } from "react";

const STORIES_DATA = [
  {
    name: "Катя",
    age: 23,
    city: "Москва",
    income: "120 000 ₽/мес",
    quote: "WAVEMODELS дали мне возможность раскрыть свой потенциал и обрести финансовую независимость.",
    image: "/public/lovable-uploads/17474640-9787-4e03-97b2-e5134ab58cd0.png"
  },
  {
    name: "Аня",
    age: 22,
    city: "Казань",
    income: "180 000 ₽/мес",
    quote: "Гибкий график и комфортные условия позволяют мне совмещать работу с учебой и личной жизнью.",
    image: "/public/lovable-uploads/c3730e74-63a9-4eba-a868-1beaa9b1204e.png"
  },
  {
    name: "Вика",
    age: 21,
    city: "СПб",
    income: "240 000 ₽/мес",
    quote: "В WAVEMODELS настоящая семейная атмосфера, всегда поддержат и помогут.",
    image: "/public/lovable-uploads/63fb957a-4a1b-4cc1-aa23-13d11a258605.png"
  },
  {
    name: "Алина",
    age: 25,
    city: "Сочи",
    income: "310 000 ₽/мес",
    quote: "Наконец-то нашла агентство, где уважают личные границы и создают все условия для успеха.",
    image: "/public/lovable-uploads/e9eaff59-74d3-4dbd-abf4-a41e11f3dcaf.png"
  },
  {
    name: "Мария",
    age: 24,
    city: "Новосибирск",
    income: "140 000 ₽/мес",
    quote: "Всего за два месяца работы в WAVEMODELS я смогла полностью погасить кредиты и начать копить на квартиру.",
    image: "/public/lovable-uploads/38a8c311-b6c9-4a0f-9fec-310585f02abc.png"
  },
  {
    name: "Диана",
    age: 22,
    city: "Екатеринбург",
    income: "200 000 ₽/мес",
    quote: "Профессиональная команда, прозрачные условия и своевременные выплаты — всё это WAVEMODELS.",
    image: "/public/lovable-uploads/3bb68e43-92a3-48ae-980e-a5a7397b84df.png"
  },
  {
    name: "София",
    age: 26,
    city: "Краснодар",
    income: "270 000 ₽/мес",
    quote: "Благодаря WAVEMODELS я обрела уверенность в себе и финансовую стабильность.",
    image: "/public/lovable-uploads/96e84418-cf4b-4fd4-838e-b0eafeeeeab9.png"
  },
  {
    name: "Ника",
    age: 21,
    city: "Воронеж",
    income: "360 000 ₽/мес",
    quote: "В WAVEMODELS я нашла не только высокооплачиваемую работу, но и настоящих друзей среди коллег.",
    image: "/public/lovable-uploads/e71aeb4f-9948-4dad-b1b5-b9d755678470.png"
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
                        <span className="mr-2 text-xs">💼</span> {story.income}
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
