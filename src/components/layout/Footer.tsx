import Image from "next/image";

export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 py-16 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-start">
          <Image 
            src="/logo/inovathings-transparente.png" 
            alt="InovaThings Brasil" 
            width={320}
            height={90}
            className="h-20 lg:h-24 w-auto mb-6 object-contain grayscale opacity-80 hidden dark:block" 
            style={{ width: 'auto' }}
          />
          <Image 
            src="/logo/inovathings-transparente-dark.png" 
            alt="InovaThings Brasil" 
            width={320}
            height={90}
            className="h-20 lg:h-24 w-auto mb-6 object-contain grayscale opacity-80 block dark:hidden" 
            style={{ width: 'auto' }}
          />
          <p className="text-sm leading-relaxed max-w-xs">
            {dict.desc}
          </p>
        </div>
        
        <div>
          <h3 className="text-zinc-900 dark:text-zinc-50 font-semibold mb-6 text-sm uppercase tracking-wider">{dict.legalTitle}</h3>
          <ul className="text-sm space-y-3">
            <li>{dict.legal1}</li>
            <li>{dict.legal2}</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-zinc-900 dark:text-zinc-50 font-semibold mb-6 text-sm uppercase tracking-wider">{dict.addressTitle}</h3>
          <ul className="text-sm space-y-3">
            <li>{dict.address1}</li>
            <li>{dict.address2}</li>
            <li>{dict.email}</li>
            <li>{dict.phone}</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-900/50 text-sm flex flex-col sm:flex-row justify-between items-center text-zinc-500">
        <p>&copy; {new Date().getFullYear()} {dict.copy}</p>
      </div>
    </footer>
  );
}
