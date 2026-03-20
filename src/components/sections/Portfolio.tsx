import { FadeIn } from "@/components/ui/FadeIn";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  partner?: string;
  partnerUrl?: string;
}

export default function Portfolio({ dict }: { dict: any }) {
  const projects: Project[] = dict.projects || [];

  return (
    <section id="portfolio" className="py-24 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900/50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.1}>
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">{dict.title}</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">{dict.subtitle}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <FadeIn 
              key={project.id} 
              delay={0.2 + idx * 0.1}
              className={`h-full ${idx === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className="h-full group rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors flex flex-col p-8 shadow-sm hover:shadow-md">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{project.title}</h3>
                  {project.partner && (
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-2 block">
                      {dict.partnerPrefix}
                      {project.partnerUrl ? (
                        <a 
                          href={project.partnerUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors underline decoration-zinc-200 dark:decoration-zinc-800 underline-offset-4 cursor-pointer"
                        >
                          {project.partner}
                        </a>
                      ) : (
                        project.partner
                      )}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag: string, tagIdx: number) => (
                    <span 
                      key={tagIdx} 
                      className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium px-3 py-1.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800/80">
                  <a 
                    href="#contato" 
                    className="inline-flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors group/btn cursor-pointer"
                  >
                    {dict.cta}
                    <svg className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
