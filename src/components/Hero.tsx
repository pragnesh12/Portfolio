import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Check, 
  Copy, 
  Phone, 
  FileText, 
  Sparkles,
  Zap,
  Code2,
  Building2
} from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHT_METRICS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenDeployGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenDeployGuide }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 overflow-hidden border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 text-left space-y-5">
            {/* Nyusoft Role Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>Full Stack Developer &bull; Nyusoft Solutions</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Pragnesh Rana
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 font-medium">
              Full Stack Web Engineer &bull; Internal AI Tooling Mentorship
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
              Specialized in building end-to-end production web platforms at <strong>Nyusoft Solutions</strong> using Next.js, Node.js, TypeScript, PostgreSQL, and AWS. Graduated with academic distinction (<strong>9.73 CGPA</strong>), and internally helping lead developer productivity and modern AI tool workflows as AI Vice Captain within our engineering team.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-bold text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-md active:scale-95"
              >
                <span>View Client Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-medium text-xs sm:text-sm transition-all"
              >
                <FileText className="w-4 h-4 text-zinc-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs sm:text-sm transition-all"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span className="text-white font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Meta Indicators */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-zinc-400 border-t border-zinc-900">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a 
                href={`tel:${PERSONAL_INFO.phone}`} 
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-7 space-y-5 text-left shadow-xl">
              {/* Profile Card Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center font-mono font-bold text-lg text-white">
                    PR
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">
                      {PERSONAL_INFO.name}
                    </h2>
                    <p className="text-xs text-zinc-400">
                      Nyusoft Solutions &bull; Ahmedabad
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800">
                  Open to Hire
                </span>
              </div>

              {/* Core Strengths */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">Full-Stack Architecture</h3>
                    <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                      Building full-cycle web applications with Next.js, Node.js, PostgreSQL, Stripe payments, and AWS deployments.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">AI Vice Captain (Internal Role)</h3>
                    <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                      Internally mentoring teammates at Nyusoft on effective AI developer tools (Cursor, Gemini) and token-efficient coding workflows.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white shrink-0 mt-0.5">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">Academic Distinction</h3>
                    <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                      Graduated with 9.73 CGPA in BCA, backed by Python certification from IIT Bombay and Deakin University readiness credential.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-2 border-t border-zinc-800">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                  <span className="font-semibold text-zinc-300">Core Technologies</span>
                  <span className="text-[11px] font-mono text-zinc-400">TypeScript / React / Node</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'AWS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {HIGHLIGHT_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-zinc-300 mt-0.5">
                {metric.label}
              </div>
              <div className="text-[11px] text-zinc-500 mt-1">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
