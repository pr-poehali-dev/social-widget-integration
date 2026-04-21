import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/9f06bdad-0b6d-4b69-ba69-25867af2266c/files/950a1bfc-3cea-411c-87a6-5b1cdd47e308.jpg"
          alt="Строительная площадка с инженерными изысканиями"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-80">Инженерные изыскания · Проектирование · Визуализация</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          СТРОИМ<br />НА ТОЧНЫХ<br />ДАННЫХ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Разрешения на строительство, инженерные изыскания, лазерное сканирование и проекты планировки — под ключ
        </p>
        <button className="border border-white text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300">
          Получить консультацию
        </button>
      </div>
    </div>
  );
}