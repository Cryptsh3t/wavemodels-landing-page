import React from "react";
import { Button } from "@/components/ui/button";

const Conditions = () => {
  return (
    <section id="conditions" className="py-20 bg-black/90 text-light relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-gold text-3xl md:text-4xl font-bold mb-12 text-center">Условия сотрудничества</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark/60 backdrop-blur-sm p-8 rounded-lg border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="text-gold text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-semibold mb-3">Высокий доход</h3>
              <p className="text-xl opacity-90">от $800/мес</p>
            </div>
            
            <div className="bg-dark/60 backdrop-blur-sm p-8 rounded-lg border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="text-gold text-4xl mb-4">🕒</div>
              <h3 className="text-2xl font-semibold mb-3">Гибкий график</h3>
              <p className="text-xl opacity-90">Вы сами выбираете своё расписание</p>
            </div>
            
            <div className="bg-dark/60 backdrop-blur-sm p-8 rounded-lg border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="text-gold text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-semibold mb-3">Полная анонимность</h3>
              <p className="text-xl opacity-90">Гарантируем конфиденциальность</p>
            </div>
            
            <div className="bg-dark/60 backdrop-blur-sm p-8 rounded-lg border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="text-gold text-4xl mb-4">📞</div>
              <h3 className="text-2xl font-semibold mb-3">Поддержка 24/7</h3>
              <p className="text-xl opacity-90">Всегда на связи для наших моделей</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-gold/90 hover:bg-gold text-dark text-lg py-6 px-8 font-semibold rounded-md transition-all duration-300 hover:scale-105">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conditions;
