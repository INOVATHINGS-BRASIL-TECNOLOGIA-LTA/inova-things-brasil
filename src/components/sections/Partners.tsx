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
  // Duplicate for seamless infinite scrolling loops
  { name: "Nathealth", logo: "/logo/parceiros/nathealth.png" },
  { name: "Akila", logo: "/logo/parceiros/akila.png" },
  { name: "Domo", logo: "/logo/parceiros/domo.png" },
  { name: "IntelligHub", logo: "/logo/parceiros/intellighub.png" },
];

export function Partners({ dictionary }: PartnersProps) {
  return (
    <section className="py-20 overflow-hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-white/10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500 mb-4"
          >
            {dictionary?.partners?.title || "Nossos Parceiros"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            {dictionary?.partners?.subtitle || "Inovando lado a lado com grandes players do mercado"}
          </motion.p>
        </div>

        <div className="flex relative overflow-hidden group">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
            className="flex items-center min-w-max space-x-16 px-8"
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-24 w-48 relative transition-all duration-300"
              >
                <div className="relative w-full h-full flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer drop-shadow-sm hover:drop-shadow-lg scale-95 hover:scale-110">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 150px, 200px"
                    priority={index < 4}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
