import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Share2, 
  Menu, 
  X, 
  ChevronRight,
  Github
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenDeployGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenDeployGuide }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'AI Tooling', href: '#ai-leadership' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
        scrolled 
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-3 shadow-lg shadow-black/40' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus:outline-none rounded-lg"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center font-mono font-bold text-sm sm:text-base text-white group-hover:border-zinc-500 transition-colors shadow-sm">
            PR
          </div>
          <div>
            <span className="font-bold text-sm sm:text-base tracking-tight text-white block group-hover:text-zinc-300 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] font-mono text-zinc-400 block -mt-0.5">
              Nyusoft Solutions
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/80 border border-zinc-800/90 rounded-full px-3 py-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenDeployGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-all"
            title="Export to GitHub, Download ZIP, or Share link"
          >
            <Github className="w-3.5 h-3.5 text-zinc-400" />
            <span>Export &amp; Deploy</span>
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded-lg shadow-sm transition-all active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu button (Accessible touch target >= 44px) */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-xs font-medium text-white bg-zinc-900 border border-zinc-800 rounded-xl active:bg-zinc-800"
            aria-label="View Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-zinc-300 hover:text-white rounded-xl bg-zinc-900 border border-zinc-800 active:bg-zinc-800 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/98 backdrop-blur-xl px-4 py-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>Full Stack Developer &bull; Nyusoft Solutions</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] px-3 py-2.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-900 rounded-xl border border-zinc-800/80 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-black text-xs font-bold shadow-md active:bg-zinc-200"
            >
              <FileText className="w-4 h-4" />
              <span>View &amp; Print Resume (ATS)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs font-semibold active:bg-zinc-800"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              <span>Export to GitHub &amp; Deployment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
