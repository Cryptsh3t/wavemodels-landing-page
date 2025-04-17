import React, { useEffect, useRef } from "react";

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
    value: "1890+",
    text: "девушек уже работают с нами"
  },
  {
    icon: "💸",
    value: "65 000 000 ₽+",
    text: "выплачено с 2020 года"
  },
  {
    icon: "📈",
    value: "98%",
    text: "остаются дольше 3 месяцев"
  },
  {
    icon: "📃",
    value: "",
    text: "Работаем по договору"
  },
  {
    icon: "🔐",
    value: "",
    text: "Соблюдаем полную конфиденциальность"
  },
  {
    icon: "💬",
    value: "",
    text: "Открытые условия, без скрытых комиссий"
  }
];

const WhyUs = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const animatedRefs = useRef<Map<HTMLElement, boolean>>(new Map());

  const checkScroll = () => {
    if (!statsRef.current) return;
    
    const elements = statsRef.current.querySelectorAll('.stat-item');
    
    elements.forEach((element) => {
      const el = element as HTMLElement;
      if (animatedRefs.current.get(el)) return;
      
      const rect = el.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight * 0.8;
      
      if (isInView) {
        el.classList.add('animate-in');
        animatedRefs.current.set(el, true);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    // Initial check
    setTimeout(checkScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <section id="why-us" className="py-20 bg-dark text-light">
      <div className="container mx-auto px-4">
        <h2 className="text-gold text-3xl md:text-4xl font-bold mb-16 text-center">Почему выбирают нас</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reasonsData.map((reason, index) => (
            <div key={index} className="text-center p-6 border border-gold/20 rounded-lg hover:border-gold/60 transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl mb-4">{reason.emoji}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{reason.title}</h3>
              <p className="text-white/80">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24">
          <h2 className="text-gold text-3xl md:text-4xl font-bold mb-16 text-center">Почему нам доверяют</h2>
          
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-item flex items-center opacity-0 transition-all duration-700" style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="text-4xl mr-4">{stat.icon}</div>
                <div>
                  <div className="flex items-baseline">
                    {stat.value && (
                      <span className="text-2xl font-bold text-gold mr-2">{stat.value}</span>
                    )}
                    <span className="text-lg">{stat.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
