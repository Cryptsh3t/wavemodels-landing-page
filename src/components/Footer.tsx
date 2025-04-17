
import React from "react";

const Footer = () => {
  const menuItems = [
    { name: "О нас", href: "#about" },
    { name: "Условия", href: "#conditions" },
    { name: "Почему мы", href: "#why-us" },
    { name: "Отзывы", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Анкета", href: "#form" },
  ];

  return (
    <footer className="bg-black text-white py-12 border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <a href="#" className="text-2xl font-bold mb-6 md:mb-0">
            <span className="text-gold">WAVE</span>
            <span className="text-light">MODELS</span>
          </a>
          
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-gold transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="text-center text-white/60 text-sm pt-6 border-t border-gold/10">
          © 2025 WAVEMODELS. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
