"use client";

import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (newLocale: string) => {
    setIsOpen(false);
    if (!pathname) return;
    
    const segments = pathname.split('/');
    if (segments[1] && (segments[1].toLowerCase() === 'pt-br' || segments[1].toLowerCase() === 'en-us')) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    const newPath = segments.join('/');
    
    // Forçar recarga da árvore de componentes (Server Side) no idioma alvo
    window.location.href = newPath;
  };

  const displayText = currentLocale.toUpperCase() === 'EN-US' ? 'EN-US' : 'PT-BR';

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 text-xs font-bold rounded-md px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 focus:outline-none transition-colors shadow-sm cursor-pointer"
        aria-expanded={isOpen}
      >
        {displayText}
        <svg className={`w-4 h-4 transition-transform duration-200 text-zinc-500 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-28 origin-top-right rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-hidden backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
          <div className="py-1">
            <button
              onClick={() => switchLocale('pt-BR')}
              className={`block w-full text-left px-4 py-2.5 text-xs font-bold cursor-pointer transition-colors ${currentLocale.toLowerCase() === 'pt-br' ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900'}`}
            >
              PT-BR
            </button>
            <button
              onClick={() => switchLocale('en-US')}
              className={`block w-full text-left px-4 py-2.5 text-xs font-bold cursor-pointer transition-colors ${currentLocale.toLowerCase() === 'en-us' ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900'}`}
            >
              EN-US
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
