
import React from "react";

const ConditionsWithVideo = () => {
  return (
    <section id="conditions" className="py-20 text-light relative">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1076259702?h=8f35914296&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&background=1&muted=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "150%",
              height: "150%",
              transform: "translate(-50%, -50%)",
              objectFit: "cover",
            }}
            title="WAVEMODELS Background"
          ></iframe>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-gold text-3xl md:text-4xl font-bold mb-16 text-center">Условия сотрудничества</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark/80 backdrop-blur-sm p-8 rounded-lg border border-gold/30 transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gold/20 rounded-full mr-4">
                <span className="text-gold text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-semibold">Высокий доход</h3>
            </div>
            <p className="text-light/90">от $1500/мес</p>
          </div>
          
          <div className="bg-dark/80 backdrop-blur-sm p-8 rounded-lg border border-gold/30 transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gold/20 rounded-full mr-4">
                <span className="text-gold text-2xl">🕒</span>
              </div>
              <h3 className="text-2xl font-semibold">Гибкий график</h3>
            </div>
            <p className="text-light/90">Вы сами выбираете своё расписание</p>
          </div>
          
          <div className="bg-dark/80 backdrop-blur-sm p-8 rounded-lg border border-gold/30 transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gold/20 rounded-full mr-4">
                <span className="text-gold text-2xl">🔒</span>
              </div>
              <h3 className="text-2xl font-semibold">Полная анонимность</h3>
            </div>
            <p className="text-light/90">Гарантируем конфиденциальность</p>
          </div>
          
          <div className="bg-dark/80 backdrop-blur-sm p-8 rounded-lg border border-gold/30 transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gold/20 rounded-full mr-4">
                <span className="text-gold text-2xl">📞</span>
              </div>
              <h3 className="text-2xl font-semibold">Поддержка 24/7</h3>
            </div>
            <p className="text-light/90">Всегда на связи для наших моделей</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="#form" className="inline-block bg-gold hover:bg-gold/80 text-dark font-semibold py-3 px-8 rounded transition-all hover:shadow-[0_0_20px_5px_rgba(255,215,0,0.3)]">
            Узнать больше
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConditionsWithVideo;
