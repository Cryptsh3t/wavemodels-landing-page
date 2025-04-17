import React, { useEffect, useRef } from "react";
import { CountUp } from 'countup.js';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const reasonsData = [
  {
    emoji: "🤝",
    title: "Забота",
    description: "атмосфера доверия"
  },
  {
    emoji: "🙋‍♀️",
    title: "Уважение",
    description: "к выбору и границам"
  },
  {
    emoji: "🧘‍♀️",
    title: "Комфорт",
    description: "психологический и организационный"
  },
  {
    emoji: "💵",
    title: "Надёжность",
    description: "выплаты и честные условия"
  }
];

const statsData = [
  {
    icon: "👩‍🦱",
    value: 1890,
    text: "девушек уже работают с нами",
    isAnimated: true,
    suffix: "+"
  },
  {
    icon: "💸",
    value: 65000000,
    text: "выплачено с 2020 года",
    isAnimated: true,
    suffix: "₽+"
  },
  {
    icon: "📈",
    value: 98,
    text: "остаются дольше 3 месяцев",
    isAnimated: true,
    suffix: "%"
  },
  {
    icon: "📃",
    text: "Работаем по договору",
    isAnimated: false
  },
  {
    icon: "🔐",
    text: "Гарантируем полную защиту ваших персональных данных на всех этапах сотрудничества",
    isAnimated: false
  },
  {
    icon: "💬",
    text: "Открытые условия, без скрытых комиссий",
    isAnimated: false
  }
];

const WhyUs = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const countersInitialized = useRef<boolean>(false);

  const initCounters = () => {
    if (!statsRef.current || countersInitialized.current) return;

    const options = {
      duration: 2,
      useGrouping: true,
    };

    statsData.forEach((stat, index) => {
      if (!stat.isAnimated || !stat.value) return;

      const element = statsRef.current?.querySelector(`#counter-${index}`);
      if (!element) return;

      new CountUp(element as HTMLElement, stat.value, {
        ...options,
        suffix: stat.suffix,
      }).start();
    });

    countersInitialized.current = true;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            initCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="py-20 bg-dark text-light">
      <div className="container mx-auto px-4">
        <h2 className="text-gold text-3xl md:text-4xl font-bold mb-16 text-center">Почему выбирают нас</h2>
        
        <div className="mb-20">
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="flex items-stretch -ml-2 md:-ml-4">
              {reasonsData.map((reason, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 flex"
                >
                  <div className="text-center p-8 border border-gold/20 rounded-lg hover:border-gold/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] flex flex-col justify-between w-full">
                    <div className="text-6xl mb-6">{reason.emoji}</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-white">{reason.title}</h3>
                      <p className="text-white/80 text-lg">{reason.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        <div className="mt-24">
          <h2 className="text-gold text-3xl md:text-4xl font-bold mb-16 text-center">Почему нам доверяют</h2>
          
          <div ref={statsRef} className="max-w-7xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent className="flex items-stretch -ml-2 md:-ml-4">
                {statsData.map((stat, index) => (
                  <CarouselItem 
                    key={index} 
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="flex items-center gap-6 p-6">
                      <div className="text-5xl">{stat.icon}</div>
                      <div className="text-left flex-1">
                        {stat.isAnimated ? (
                          <>
                            <div className="flex items-baseline gap-2">
                              <span id={`counter-${index}`} className="text-2xl font-bold text-gold">
                                0
                              </span>
                              {stat.suffix && <span className="text-gold text-xl">{stat.suffix}</span>}
                            </div>
                            <p className="text-white/80 mt-2 text-lg">{stat.text}</p>
                          </>
                        ) : (
                          <p className="text-white/80 text-lg">{stat.text}</p>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
