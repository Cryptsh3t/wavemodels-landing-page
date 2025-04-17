
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark text-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-gold text-3xl md:text-4xl font-bold mb-8">О нас</h2>
          <p className="text-xl mb-8 leading-relaxed">
            <span className="text-gold font-bold">WAVEMODELS</span> — элитное модельное агентство, где каждая девушка чувствует себя важной, уверенной и уважаемой. Мы ценим индивидуальность и бережно относимся к эмоциям, состоянию и выбору каждой модели.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-dark border border-gold/30 p-6 rounded-lg hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all duration-300">
              <div className="text-gold text-3xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Мы рядом — всегда</h3>
              <p className="text-sm text-light/80">На каждом этапе модельного пути — от первых фотосессий до уверенного заработка. Мы сопровождаем, обучаем и поддерживаем вас в мире моды 24/7.</p>
            </div>
            
            <div className="bg-dark border border-gold/30 p-6 rounded-lg hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all duration-300">
              <div className="text-gold text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-2">Безопасность и конфиденциальность</h3>
              <p className="text-sm text-light/80">На каждом этапе модельного пути — от первых фотосессий до уверенного заработка. Мы сопровождаем, обучаем и поддерживаем вас в мире моды 24/7.</p>
            </div>
            
            <div className="bg-dark border border-gold/30 p-6 rounded-lg hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all duration-300">
              <div className="text-gold text-3xl mb-4">📜</div>
              <h3 className="text-xl font-semibold mb-2">Прозрачные условия, никаких скрытых требований</h3>
              <p className="text-sm text-light/80">На каждом этапе модельного пути — от первых фотосессий до уверенного заработка. Мы сопровождаем, обучаем и поддерживаем вас в мире моды 24/7.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
