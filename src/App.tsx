/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AIViceCaptainSpotlight } from './components/AIViceCaptainSpotlight';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { FileText, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [showFloatingActions, setShowFloatingActions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingActions(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut: Ctrl+K or Cmd+K to open Quick Resume
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setResumeOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F0D] text-[#EAEAEA] flex flex-col selection:bg-[#34D399]/30 selection:text-[#34D399] relative">
      {/* Top Fixed Header */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
        />
        <ProjectsSection />
        <AIViceCaptainSpotlight />
        <ExperienceTimeline />
        <SkillsMatrix />
        <EducationCertifications />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Quick Floating Dock on Scroll */}
      {showFloatingActions && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-30 no-print flex items-center gap-2 p-1.5 rounded-full bg-[#141816]/95 backdrop-blur-md border border-[#232B26] shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A201D] hover:bg-[#232B26] text-[#EAEAEA] hover:text-[#34D399] text-xs font-semibold border border-[#232B26] transition-all"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#34D399]" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <button
            onClick={() => setResumeOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#34D399] hover:bg-[#2ecc8f] text-[#0B0F0D] text-xs font-bold shadow-md shadow-[#34D399]/20 transition-all active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>
      )}

      {/* Recruiter ATS Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
