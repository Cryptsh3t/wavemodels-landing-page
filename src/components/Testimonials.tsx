import React, { useState, useEffect } from "react";

const TESTIMONIALS_DATA = [
  {
    name: "Арина",
    age: 24,
    city: "Москва",
    text: "Здесь к тебе относятся с уважением и теплотой.",
    image: "https://images.pexels.com/photos/18906154/pexels-photo-18906154/free-photo-of-k-a-u-s-b-y-d-m-p-h-o-t-o-s-t-u-d-i-o.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Кристина",
    age: 22,
    city: "Омск",
    text: "Я всегда получаю поддержку от агентства. Очень отзывчиво!",
    image: "https://images.pexels.com/photos/19443974/pexels-photo-19443974/free-photo-of-brunette-woman-in-fur-coat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Лера",
    age: 25,
    city: "СПб",
    text: "Теперь понимаю - это лучший выбор.",
    image: "https://images.pexels.com/photos/30351616/pexels-photo-30351616/free-photo-of-high-fashion-editorial-portrait-in-london-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Наташа",
    age: 23,
    city: "Тюмень",
    text: "Безопасно, стабильно, с поддержкой. Хорошая команда.",
    image: "https://images.pexels.com/photos/19811912/pexels-photo-19811912/free-photo-of-woman-portrait-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Полина",
    age: 26,
    city: "Самара",
    text: "Здесь заботятся - и о чувствах, и о финансах.",
    image: "https://images.pexels.com/photos/594421/pexels-photo-594421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Эля",
    age: 20,
    city: "Хабаровск",
    text: "Совмещаю с учёбой, гибкий график. Работаю с удовольствием!",
    image: "https://images.pexels.com/photos/18373300/pexels-photo-18373300/free-photo-of-a-young-brunette-with-bangs-wearing-an-off-shoulder-blouse.jpeg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 5000);
  };

  useEffect(() => {
    if (!autoSlide) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [autoSlide]);

  return (
    <section id="testimonials" className="py-20 bg-dark text-light">
      <div className="container mx-auto px-4">
        <h2 className="text-gold text-3xl md:text-4xl font-bold mb-16 text-center">Отзывы</h2>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Main Testimonial Slider */}
          <div className="relative min-h-[600px] md:min-h-[380px] overflow-hidden rounded-xl bg-black/50 border border-gold/20">
            {TESTIMONIALS_DATA.map((testimonial, index) => (
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
                <div className="h-72 md:w-1/3 md:h-auto">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} from ${testimonial.city}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                  <p className="text-lg md:text-xl mb-4 md:mb-6 italic">"{testimonial.text}"</p>
                  <h3 className="text-base md:text-lg font-semibold">
                    {testimonial.name}, {testimonial.age}, {testimonial.city}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation */}
          <div className="absolute top-[35%] md:top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-10 px-4">
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
            {TESTIMONIALS_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
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

export default Testimonials;
