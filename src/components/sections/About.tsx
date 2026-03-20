import { FadeIn } from "@/components/ui/FadeIn";

export default function About({ dict }: { dict: any }) {
  return (
    <section id="sobre" className="py-24 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900/50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 px-3 py-1 text-sm text-zinc-600 dark:text-zinc-400 mb-6">
              {dict.badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight">
              {dict.title}
            </h2>
            <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed">
              <p>{dict.p1}</p>
              <p>{dict.p2}</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <FadeIn delay={0.2} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 flex flex-col justify-between shadow-sm">
              <div className="w-10 h-10 rounded bg-zinc-100 dark:bg-zinc-800/80 flex items-center justify-center text-zinc-700 dark:text-zinc-300 mb-4 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">{dict.cards.inpi.title}</h4>
              <p className="text-sm text-zinc-500 font-mono">{dict.cards.inpi.number}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                {dict.cards.inpi.desc}
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 flex flex-col justify-between shadow-sm">
              <div className="w-10 h-10 rounded bg-zinc-100 dark:bg-zinc-800/80 flex items-center justify-center text-zinc-700 dark:text-zinc-300 mb-4 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">{dict.cards.cnpj.title}</h4>
              <p className="text-sm text-zinc-500 font-mono">{dict.cards.cnpj.number}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                {dict.cards.cnpj.desc}
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 flex flex-col justify-between sm:col-span-2 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded bg-zinc-100 dark:bg-zinc-800/80 flex items-center justify-center text-zinc-700 dark:text-zinc-300 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{dict.cards.expertise.title}</h4>
                  <p className="text-sm text-zinc-500 font-mono">{dict.cards.expertise.subtitle}</p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap mt-2">
                {dict.cards.expertise.tags.map((tag: string, i: number) => (
                  <span key={i} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded text-xs text-zinc-700 dark:text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}
