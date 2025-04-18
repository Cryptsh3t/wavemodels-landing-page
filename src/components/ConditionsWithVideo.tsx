import React from "react";

const ConditionsWithVideo = () => {
  return (
    <section id="conditions" className="relative h-screen w-full overflow-hidden bg-dark text-light">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative w-full h-full">
          <div style={{ 
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden"
          }}>
            <iframe
              src="https://player.vimeo.com/video/1076574105?h=2d8230af06&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&background=1&muted=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "100vw",
                height: "56.25vw",
                minHeight: "100vh",
                minWidth: "177.77vh",
                transform: "translate(-50%, -50%)",
                objectFit: "cover"
              }}
              title="WAVEMODELS Background"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h2 className="text-6xl md:text-8xl font-bold mb-12 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
          Условия сотрудничества
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-dark/80 backdrop-blur-sm p-8 rounded-lg border border-gold/30 transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gold/20 rounded-full mr-4">
                <span className="text-gold text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-semibold">Высокий доход</h3>
            </div>
            <p className="text-light/90">от 60 000 ₽/мес до 400 000 ₽+</p>
          </div>
          
          <div className="bg-dark/80 backdrop-blur-sm p-8 rounded-lg border border-gold/30 transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gold/20 rounded-full mr-4">
                <span className="text-gold text-2xl">🔒</span>
              </div>
              <h3 className="text-2xl font-semibold">Полная анонимность</h3>
            </div>
            <p className="text-light/90">Гарантируем полную защиту ваших персональных данных на всех этапах сотрудничества</p>
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
                <span className="text-gold text-2xl">📞</span>
              </div>
              <h3 className="text-2xl font-semibold">Поддержка 24/7</h3>
            </div>
            <p className="text-light/90">Всегда на связи для наших моделей</p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#form" 
            className="inline-block bg-gold/90 hover:bg-gold text-dark text-2xl md:text-3xl font-semibold py-5 px-12 rounded-md transition-all duration-300 hover:scale-105 shadow-[0_4px_14px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,215,0,0.5)]"
          >
            Узнать больше
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConditionsWithVideo;
