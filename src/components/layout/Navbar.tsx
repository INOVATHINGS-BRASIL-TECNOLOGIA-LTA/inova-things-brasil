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
          
          <Link href={`/${currentLocale}/services`} className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors cursor-pointer">{dict.services}</Link>
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
