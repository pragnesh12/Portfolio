import React from 'react';
import { ArrowUp, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#080B0A] text-[#8B8F8D] text-xs border-t border-[#232B26] no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Summary */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-[#EAEAEA] text-sm">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[#8B8F8D]/50">&bull;</span>
              <span className="text-[#34D399] font-medium text-xs">
                Full Stack Developer
              </span>
            </div>
            <p className="text-[#8B8F8D] text-xs">
              Ahmedabad, Gujarat &bull; {PERSONAL_INFO.email} &bull; {PERSONAL_INFO.phone}
            </p>
          </div>

          {/* Quick Footer Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a href="#projects" className="hover:text-[#34D399] transition-colors">
              Projects
            </a>
            <a href="#ai-leadership" className="hover:text-[#34D399] transition-colors">
              AI Tooling
            </a>
            <a href="#experience" className="hover:text-[#34D399] transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-[#34D399] transition-colors">
              Skills
            </a>
            <a href="#education" className="hover:text-[#34D399] transition-colors">
              Education
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-[#34D399] transition-colors underline decoration-[#34D399]/40 underline-offset-4 cursor-pointer"
            >
              Resume (ATS)
            </button>
          </div>

          {/* Right Actions: Back to Top & LinkedIn */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2.5 rounded-lg bg-[#141816] hover:bg-[#1A201D] text-[#8B8F8D] hover:text-[#34D399] border border-[#232B26] hover:border-[#34D399]/40 transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-[#141816] hover:bg-[#1A201D] text-[#8B8F8D] hover:text-[#34D399] border border-[#232B26] hover:border-[#34D399]/40 transition-all shadow-sm"
              aria-label="Email Pragnesh"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#141816] hover:bg-[#1A201D] text-[#8B8F8D] hover:text-[#34D399] border border-[#232B26] hover:border-[#34D399]/40 transition-all shadow-sm cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-6 border-t border-[#232B26] flex flex-col sm:flex-row items-center justify-between text-[#8B8F8D] text-[11px] gap-2">
          <p>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="font-mono text-[#8B8F8D]">
            {PERSONAL_INFO.role} &bull; {PERSONAL_INFO.location}
          </p>
        </div>
      </div>
    </footer>
  );
};
