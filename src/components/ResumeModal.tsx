import React, { useState, useEffect } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Building2 
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  EXPERIENCES, 
  PROJECTS, 
  EDUCATION_LIST, 
  CERTIFICATIONS 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedBlurb, setCopiedBlurb] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyBlurb = () => {
    const blurb = `Pragnesh Rana — Full Stack Developer
- Professional Experience: Full Stack Web Apps, TypeScript, Next.js, Node.js, PostgreSQL, Prisma, Docker, AWS, pnpm Monorepos, Internal AI tooling leadership
- Key Projects: EyeNeedADoc (Healthcare Staffing Marketplace with Stripe Connect & DocuSign), Property Proof (AI Asset Provenance with Gemini 2.5 Flash), PassFCPS (24-module Monorepo Exam Platform)
- Education: Bachelor of Computer Applications (BCA) at Silver Oak University — 9.73 CGPA
- Location: Ahmedabad, Gujarat, India | Email: heypragnesh@gmail.com | Phone: +91 7485946310
- LinkedIn: https://linkedin.com/in/hey-pragnesh`;

    navigator.clipboard.writeText(blurb);
    setCopiedBlurb(true);
    setTimeout(() => setCopiedBlurb(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-white text-zinc-900 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Modal Top Toolbar (Screen Only, Hidden When Printing) */}
        <div className="px-5 py-3.5 bg-[#0B0F0D] text-white flex flex-wrap items-center justify-between gap-3 border-b border-[#232B26] no-print">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-[#EAEAEA]">
              Resume View
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30">
              Clean Monochrome ATS Format
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyBlurb}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141816] hover:bg-[#1A201D] text-xs font-semibold text-[#EAEAEA] border border-[#232B26] transition-colors cursor-pointer"
            >
              {copiedBlurb ? <Check className="w-3.5 h-3.5 text-[#34D399]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedBlurb ? 'Copied' : 'Copy Summary'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#34D399] hover:bg-[#34D399]/90 text-[#0B0F0D] text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#8B8F8D] hover:text-[#EAEAEA] hover:bg-[#1A201D] transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="overflow-y-auto p-6 sm:p-10 text-left space-y-6 font-sans">
          {/* Header */}
          <div className="border-b-2 border-zinc-900 pb-4 text-center">
            <h1 className="text-3xl font-extrabold tracking-wider text-zinc-950 uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-zinc-700 font-medium mt-2">
              <span>Full Stack Developer</span>
              <span>&bull;</span>
              <span>{PERSONAL_INFO.location}</span>
              <span>&bull;</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-zinc-900 underline font-semibold">
                {PERSONAL_INFO.email}
              </a>
              <span>&bull;</span>
              <span>{PERSONAL_INFO.phone}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 text-xs font-mono text-zinc-700 mt-1">
              <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline">
                {PERSONAL_INFO.linkedinUrl}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mt-5">
            <h2 className="text-sm font-extrabold text-zinc-950 uppercase tracking-wider border-b border-zinc-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-zinc-800 leading-relaxed">
              Full Stack Developer with production experience in JavaScript, TypeScript, React, Next.js, Node.js, and PostgreSQL, plus Docker and monorepo architectures. Skilled in architecting and deploying scalable web apps on AWS, and applying AI-assisted development in a structured, deliberate way while internally coordinating AI developer workflows and team mentorship as AI Vice Captain.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mt-5">
            <h2 className="text-sm font-extrabold text-zinc-950 uppercase tracking-wider border-b border-zinc-300 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="text-xs text-zinc-800 space-y-1">
              <p>
                <strong>Languages:</strong> JavaScript, TypeScript, Python, HTML, CSS, Tailwind
              </p>
              <p>
                <strong>Frameworks &amp; Libraries:</strong> React.js, Next.js 16, Node.js, Express.js
              </p>
              <p>
                <strong>Databases &amp; ORMs:</strong> PostgreSQL, Prisma ORM, MySQL, MongoDB, Redis
              </p>
              <p>
                <strong>Tools &amp; Platforms:</strong> Docker, Monorepos (pnpm), WebSocket (Socket.io), AWS (EC2, S3), BullMQ, PM2, Postman, Jest
              </p>
              <p>
                <strong>AI &amp; Developer Tooling:</strong> Cursor, Windsurf, Token-efficient prompt engineering, Gemini 2.5 Flash, structured AI assistance
              </p>
            </div>
          </section>

          {/* Experience */}
          <section className="mt-5">
            <h2 className="text-sm font-extrabold text-zinc-950 uppercase tracking-wider border-b border-zinc-300 pb-1 mb-2">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xs font-bold text-zinc-950">
                      {exp.role}, <span className="font-semibold text-zinc-700">{exp.company} &ndash; {exp.location}</span>
                    </h3>
                    <span className="text-xs font-mono text-zinc-600">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-zinc-800 leading-normal">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mt-5">
            <h2 className="text-sm font-extrabold text-zinc-950 uppercase tracking-wider border-b border-zinc-300 pb-1 mb-2">
              Key Projects (Featured Production Work)
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id}>
                  <h3 className="text-xs font-bold text-zinc-950">
                    {proj.title} &ndash; <span className="font-medium text-zinc-700">{proj.subtitle}</span>
                  </h3>
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-xs text-zinc-800 leading-normal">
                    {proj.highlights.slice(0, 4).map((hl, idx) => (
                      <li key={idx}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mt-5">
            <h2 className="text-sm font-extrabold text-zinc-950 uppercase tracking-wider border-b border-zinc-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_LIST.map((edu, i) => (
                <div key={i}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xs font-bold text-zinc-950">
                      {edu.degree}, <span className="font-semibold text-zinc-700">{edu.institution} &ndash; {edu.location}</span>
                    </h3>
                    <span className="text-xs font-mono text-zinc-600">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-800 mt-0.5">
                    Achieved <strong>{edu.grade}</strong>. {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Honors, Talks & Certifications */}
          <section className="mt-5 pb-4">
            <h2 className="text-sm font-extrabold text-zinc-950 uppercase tracking-wider border-b border-zinc-300 pb-1 mb-2">
              Honors, Tech Talks &amp; Certifications
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-zinc-800">
              {CERTIFICATIONS.map((cert, i) => (
                <li key={i}>
                  <strong>{cert.title}</strong> &ndash; {cert.issuer} {cert.score && `(${cert.score})`}. {cert.description}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
