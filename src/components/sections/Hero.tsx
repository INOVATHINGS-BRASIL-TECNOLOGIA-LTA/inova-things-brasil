import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Hero({ dict }: { dict: any }) {
  return (
    <section id="inicio" className="relative pb-24 pt-32 lg:pb-32 lg:pt-48 flex items-center bg-zinc-50 dark:bg-zinc-950 overflow-hidden min-h-[90vh] transition-colors duration-300">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTUwLCAxNTAsIDE1MCwgMC4wNSkiLz48L3N2Zz4=')] dark:opacity-30 opacity-60 mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] transition-colors duration-300" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        <div className="max-w-3xl">
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold text-zinc-900 dark:text-zinc-50 leading-tight tracking-tight mb-8">
              {dict.title}
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed max-w-2xl">
              {dict.description}
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#portfolio" 
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-sm font-medium bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer"
              >
                {dict.portfolioBtn}
              </Link>
              <Link 
                href="#contato" 
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-sm font-medium border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm cursor-pointer"
              >
                {dict.consultingBtn}
              </Link>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.4} className="hidden lg:flex justify-end opacity-80 h-[500px] relative items-center">
          <div className="absolute w-[400px] h-[400px] right-0 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="relative w-full h-full flex items-center justify-center">
             <div className="w-80 h-80 border border-zinc-300 dark:border-zinc-800/80 rounded-full absolute animate-[spin_60s_linear_infinite]" />
             <div className="w-64 h-64 border border-zinc-200 dark:border-zinc-700/60 rounded-full absolute border-dashed animate-[spin_40s_linear_infinite_reverse]" />
             <div className="w-48 h-48 border border-zinc-200 dark:border-zinc-700/40 rounded-full absolute animate-[spin_20s_linear_infinite]" />
             <div className="w-32 h-32 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shadow-2xl rotate-12 absolute">
               <svg className="w-12 h-12 text-zinc-400 dark:text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
             </div>
             <div className="w-24 h-24 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shadow-2xl -rotate-12 absolute -right-4 top-1/4">
                <svg className="w-8 h-8 text-zinc-500 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
             </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
