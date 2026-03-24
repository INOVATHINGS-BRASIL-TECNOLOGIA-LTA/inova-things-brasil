import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Hero({ dict }: { dict: any }) {
  return (
    <section id="inicio" className="relative pb-24 pt-32 lg:pb-32 lg:pt-48 flex items-center justify-center bg-zinc-950 overflow-hidden min-h-[90vh] transition-colors duration-300">
      
      {/* Background Cinematic Orb / Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-white blur-[100px] md:blur-[150px] opacity-40 mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      {/* Grid overlay to add texture (like the reference dark mist) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCkiLz48L3N2Zz4=')] opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />

      {/* Centered Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">

        <FadeIn delay={0.2} className="w-full max-w-4xl flex justify-center mb-8 relative z-10">
          <h1 className="sr-only">{dict.title}</h1>
          <Image 
            src="/logo/inovathings-transparente.png" 
            alt="InovaThings Brasil Logo"
            width={800}
            height={200}
            className="w-[85vw] max-w-2xl lg:max-w-4xl h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            priority
          />
        </FadeIn>
        
        <FadeIn delay={0.3} className="w-full max-w-2xl">
          <p className="text-lg md:text-xl text-zinc-300 mb-12 leading-relaxed drop-shadow-md">
            {dict.description}
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/pt-BR/portfolio" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium bg-white text-zinc-950 hover:bg-zinc-200 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] cursor-pointer"
            >
              {dict.portfolioBtn}
            </Link>
            <Link 
              href="#contato" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium border border-white/20 bg-transparent text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              {dict.consultingBtn}
            </Link>
          </div>
        </FadeIn>
        
        {/* Scroll indicator matching reference */}
        <FadeIn delay={0.6} className="absolute -bottom-24 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </FadeIn>
      </div>
    </section>
  );
}
