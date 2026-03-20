import { FadeIn } from "@/components/ui/FadeIn";

export default function Services({ dict }: { dict: any }) {
  const icons = [
    <svg key={1} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    <svg key={2} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
    <svg key={3} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    <svg key={4} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
  ];

  return (
    <section id="servicos" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.1}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">{dict.title}</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">{dict.description}</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {dict.items.map((service: any, idx: number) => (
            <FadeIn key={idx} delay={0.2 + idx * 0.1}>
              <div 
                className="h-full group p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center text-zinc-700 dark:text-zinc-300 mb-6 group-hover:text-zinc-950 dark:group-hover:text-white group-hover:bg-zinc-200 dark:group-hover:bg-zinc-800 transition-colors">
                  {icons[idx]}
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">{service.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
