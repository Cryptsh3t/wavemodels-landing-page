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
    image: "/public/lovable-uploads/67380019-8e4e-40eb-9371-14399cfb80d8.png"
  },
  {
    name: "Вика",
    age: 21,
    city: "СПб",
    income: "240 000 ₽/мес",
    quote: "В WAVEMODELS настоящая семейная атмосфера, всегда поддержат и помогут.",
    image: "/public/lovable-uploads/888de4dc-f3db-4b5f-800e-8ba91678de0b.png"
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
    image: "/public/lovable-uploads/4433009a-8917-44dd-8cfa-9a099fe0e255.png"
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
          <div className="relative min-h-[380px] overflow-hidden rounded-xl bg-black/50 border border-gold/20">
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
                  <h3 className="text-lg font-semibold">
                    {story.name}, {story.age}, {story.city}
                  </h3>
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
