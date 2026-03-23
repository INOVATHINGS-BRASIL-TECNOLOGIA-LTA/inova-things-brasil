import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export default function Navbar({ dict, currentLocale }: { dict: any; currentLocale: string }) {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href={`/${currentLocale}`} className="flex items-center shrink-0 cursor-pointer">
          <Image 
            src="/logo/inovathings-transparente.png" 
            width={180} 
            height={40} 
            alt="InovaThings Brasil" 
            className="object-contain hidden dark:block w-auto h-auto" 
            style={{ width: 'auto' }}
            priority
          />
          <Image 
            src="/logo/inovathings-transparente-dark.png" 
            width={180} 
            height={40} 
            alt="InovaThings Brasil" 
            className="object-contain block dark:hidden w-auto h-auto" 
            style={{ width: 'auto' }}
            priority
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href={`/${currentLocale}`} className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors cursor-pointer">{dict.home}</Link>
          
          <div className="group h-20 flex items-center">
            <Link href={`/${currentLocale}/services`} className="flex items-center gap-1 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors cursor-pointer">
              {dict.services}
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            
            <div className="absolute top-[80px] left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0">
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
                  
                  <Link href={`/${currentLocale}/services`} className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors group/item">
                    <div className="p-3 bg-red-50 dark:bg-red-500/10 rounded-lg text-red-500 group-hover/item:text-red-600 group-hover/item:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Desenvolvimento Sob Medida</h4>
                      <p className="text-xs text-zinc-500 mt-1 leading-relaxed">Sistemas customizáveis focados no domínio do seu negócio.</p>
                    </div>
                  </Link>
                  
                  <Link href={`/${currentLocale}/services`} className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors group/item">
                    <div className="p-3 bg-blue-50 dark:bg-blue-500/10 rounded-lg text-blue-500 group-hover/item:text-blue-600 group-hover/item:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Infraestrutura e Cloud</h4>
                      <p className="text-xs text-zinc-500 mt-1 leading-relaxed">Projetamos alta concorrência e processamento de eventos.</p>
                    </div>
                  </Link>

                  <Link href={`/${currentLocale}/services`} className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors group/item">
                    <div className="p-3 bg-amber-50 dark:bg-amber-500/10 rounded-lg text-amber-500 group-hover/item:text-amber-600 group-hover/item:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Consultoria em TI</h4>
                      <p className="text-xs text-zinc-500 mt-1 leading-relaxed">Estratégias de arquitetura, microsserviços e inovação.</p>
                    </div>
                  </Link>

                  <Link href={`/${currentLocale}/services`} className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors group/item">
                    <div className="p-3 bg-purple-50 dark:bg-purple-500/10 rounded-lg text-purple-500 group-hover/item:text-purple-600 group-hover/item:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Experiência Digital e UX</h4>
                      <p className="text-xs text-zinc-500 mt-1 leading-relaxed">Concepção de ecossistemas web de alta performance.</p>
                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </div>

          <Link href={`/${currentLocale}/portfolio`} className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors cursor-pointer">{dict.portfolio}</Link>
          <Link href={`/${currentLocale}#contato`} className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors cursor-pointer">{dict.contact}</Link>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher currentLocale={currentLocale} />
          <ThemeToggle />
          <Link href={`/${currentLocale}#contato`} className="hidden sm:block bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm cursor-pointer">
            {dict.cta}
          </Link>
        </div>
      </div>
    </nav>
  );
}
