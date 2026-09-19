import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
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
          ? 'bg-[#0B0F0D]/92 backdrop-blur-md border-b border-[#232B26] py-3 shadow-xl shadow-black/50' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus:outline-none rounded-lg"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#141816] border border-[#34D399]/40 flex items-center justify-center font-mono font-bold text-sm sm:text-base text-[#34D399] group-hover:border-[#34D399] group-hover:text-[#34D399] transition-all shadow-sm shadow-[#34D399]/10">
            PR
          </div>
          <div>
            <span className="font-bold text-sm sm:text-base tracking-tight text-[#EAEAEA] block group-hover:text-[#34D399] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] font-medium text-[#8B8F8D] block -mt-0.5">
              Full Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#141816]/80 border border-[#232B26] rounded-full px-3 py-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-xs font-semibold text-[#8B8F8D] hover:text-[#34D399] rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#EAEAEA] hover:text-[#34D399] bg-[#141816] hover:bg-[#1A201D] border border-[#232B26] hover:border-[#34D399]/40 rounded-lg transition-all"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3 text-[#34D399]" />
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-[#0B0F0D] bg-[#34D399] hover:bg-[#2ecc8f] rounded-lg shadow-sm shadow-[#34D399]/25 transition-all active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-[#0B0F0D]" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu button (Accessible touch target >= 44px) */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-xs font-bold text-[#0B0F0D] bg-[#34D399] rounded-xl active:bg-[#2ecc8f] shadow-sm shadow-[#34D399]/20"
            aria-label="View Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-[#EAEAEA] hover:text-white rounded-xl bg-[#141816] border border-[#232B26] active:bg-[#1A201D] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#232B26] bg-[#0B0F0D]/98 backdrop-blur-xl px-4 py-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141816] border border-[#232B26] text-[#EAEAEA] text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
            <span>Full Stack Developer &bull; AI Vice Captain</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] px-3 py-2.5 text-xs font-medium text-[#8B8F8D] hover:text-[#34D399] bg-[#141816]/70 hover:bg-[#141816] rounded-xl border border-[#232B26] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#8B8F8D]" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#232B26] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#34D399] text-[#0B0F0D] text-xs font-bold shadow-md shadow-[#34D399]/20 active:bg-[#2ecc8f]"
            >
              <FileText className="w-4 h-4" />
              <span>View &amp; Print Resume (ATS)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
