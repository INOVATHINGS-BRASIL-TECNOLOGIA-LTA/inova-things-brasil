"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PartnersProps {
  dictionary: any;
}

const partners = [
  { name: "Nathealth", logo: "/logo/parceiros/nathealth.png" },
  { name: "Akila", logo: "/logo/parceiros/akila.png" },
  { name: "Domo", logo: "/logo/parceiros/domo.png" },
  { name: "IntelligHub", logo: "/logo/parceiros/intellighub.png" },
  { name: "Pro Empresa", logo: "/logo/parceiros/proempresa-logo.png" },
];

export function Partners({ dictionary }: PartnersProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/5">
      {/* Subtle background glow effect matching reference vibe */}
      <div className="absolute inset-0 top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] opacity-20 dark:opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl dark:from-white/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-500 mb-12 text-center"
        >
          {dictionary?.partners?.title || "Partners"}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-24 w-full max-w-5xl"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="relative w-32 h-12 md:w-44 md:h-16 flex items-center justify-center transition-all duration-500 group"
            >
              <div className="relative w-full h-full brightness-0 opacity-40 hover:opacity-100 dark:invert transition-opacity duration-300">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 150px, 200px"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
