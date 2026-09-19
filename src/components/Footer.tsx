import React from 'react';
import { ArrowUp, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenDeployGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-zinc-950 text-zinc-400 text-xs border-t border-zinc-900 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Summary */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-white text-sm">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-zinc-600">&bull;</span>
              <span className="text-zinc-400 font-mono text-xs">
                Nyusoft Solutions
              </span>
            </div>
            <p className="text-zinc-500 text-xs">
              Ahmedabad, Gujarat &bull; {PERSONAL_INFO.email} &bull; {PERSONAL_INFO.phone}
            </p>
          </div>

          {/* Quick Footer Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#ai-leadership" className="hover:text-white transition-colors">
              AI Tooling
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-white transition-colors underline"
            >
              Resume (ATS)
            </button>
            <button
              onClick={onOpenDeployGuide}
              className="hover:text-white transition-colors"
            >
              Deployment Guide
            </button>
          </div>

          {/* Right Actions: Back to Top & LinkedIn */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
              aria-label="Email Pragnesh"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-zinc-600 text-[11px] gap-2">
          <p>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All projects developed at Nyusoft Solutions.
          </p>
          <p className="font-mono text-zinc-500">
            {PERSONAL_INFO.role} &bull; {PERSONAL_INFO.location}
          </p>
        </div>
      </div>
    </footer>
  );
};
