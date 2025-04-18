
import React from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-dark text-light">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative w-full h-full video-background">
          <iframe
            src="https://player.vimeo.com/video/1076567933?h=50789be209&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&background=1&muted=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100vw",
              height: "100vh",
              transform: "translate(-50%, -50%)",
              objectFit: "cover",
            }}
            title="WAVEMODELS Background"
          ></iframe>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 max-w-3xl text-shadow">
          Раскройте свой потенциал с{" "}
          <span className="text-gold">WAVEMODELS</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl text-shadow">
          Элитное модельное агентство, где ценят индивидуальность, обеспечивают комфорт и гарантируют высокий доход
        </p>
        <a href="#form">
          <Button className="mobile-optimized-button bg-gold hover:bg-gold/90 text-dark text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(255,215,0,0.5)]">
            Заполнить анкету
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
