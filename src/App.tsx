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
import { DeploymentModal } from './components/DeploymentModal';
import { FileText, Share2, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [deployOpen, setDeployOpen] = useState(false);
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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-zinc-700 selection:text-white relative">
      {/* Top Fixed Header */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenDeployGuide={() => setDeployOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenDeployGuide={() => setDeployOpen(true)}
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
        onOpenDeployGuide={() => setDeployOpen(true)}
      />

      {/* Quick Floating Dock on Scroll */}
      {showFloatingActions && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-30 no-print flex items-center gap-2 p-1.5 rounded-full bg-zinc-900/95 backdrop-blur-md border border-zinc-700 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-zinc-700 transition-all"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <button
            onClick={() => setResumeOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-bold shadow-md transition-all active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => setDeployOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium border border-zinc-700 transition-all"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Deploy</span>
          </button>
        </div>
      )}

      {/* Recruiter ATS Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Deployment & LinkedIn Setup Guide Modal */}
      <DeploymentModal
        isOpen={deployOpen}
        onClose={() => setDeployOpen(false)}
      />
    </div>
  );
}
