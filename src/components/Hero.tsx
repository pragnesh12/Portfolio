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
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 overflow-hidden border-b border-[#232B26] bg-[#0B0F0D]">
      {/* Dual ambient glow behind hero for depth */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#34D399]/[0.035] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[300px] bg-[#A78BFA]/[0.025] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 text-left space-y-5">
            {/* Role & Leadership Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141816] border border-[#232B26] text-xs font-semibold text-[#EAEAEA] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#34D399] shadow-[0_0_8px_rgba(52,211,153,0.7)] animate-pulse" />
              <span>Full Stack Developer &bull; AI Vice Captain</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#EAEAEA] leading-[1.12]">
              Pragnesh Rana
            </h1>

            <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg font-semibold tracking-wide">
              <span className="text-[#34D399]">Full Stack Web Engineer</span>
              <span className="text-[#8B8F8D]">&bull;</span>
              <span className="text-[#EAEAEA]">Modern Architecture &amp; AI Workflows</span>
            </div>

            <p className="text-sm sm:text-base text-[#8B8F8D] leading-relaxed max-w-2xl">
              Full Stack Engineer specializing in resilient, high-performance web systems using React, Next.js, TypeScript, Node.js, and PostgreSQL. Currently engineering production platforms at <strong className="text-[#EAEAEA] font-semibold">Nyusoft Solutions</strong>, while serving internally as AI Vice Captain to champion high-leverage developer workflows, structured prompting, and token-efficient architectures.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#34D399] text-[#0B0F0D] font-bold text-xs sm:text-sm hover:bg-[#2ecc8f] transition-all shadow-md shadow-[#34D399]/20 active:scale-95"
              >
                <span>View Client Projects</span>
                <ArrowRight className="w-4 h-4 text-[#0B0F0D]" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#141816] hover:bg-[#1A201D] border border-[#232B26] hover:border-[#34D399]/40 text-[#EAEAEA] font-semibold text-xs sm:text-sm transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#34D399]" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#141816] hover:bg-[#1A201D] border border-[#232B26] hover:border-[#34D399]/40 text-[#EAEAEA] text-xs sm:text-sm transition-all"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-[#34D399]" />
                    <span className="text-[#34D399] font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#8B8F8D]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Meta Indicators */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-[#8B8F8D] border-t border-[#232B26]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#34D399]" />
                <span className="text-[#EAEAEA]">Ahmedabad, Gujarat, India</span>
              </div>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="flex items-center gap-1.5 hover:text-[#34D399] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#34D399]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a 
                href={`tel:${PERSONAL_INFO.phone}`} 
                className="flex items-center gap-1.5 hover:text-[#34D399] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#34D399]" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#232B26] bg-[#141816] p-5 sm:p-7 space-y-5 text-left shadow-2xl shadow-black/70 relative">
              {/* Profile Card Header */}
              <div className="flex items-center justify-between border-b border-[#232B26] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#1A201D] border border-[#34D399]/40 flex items-center justify-center font-mono font-bold text-lg text-[#34D399] shadow-inner">
                    PR
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#EAEAEA]">
                      {PERSONAL_INFO.name}
                    </h2>
                    <p className="text-xs text-[#8B8F8D]">
                      Full Stack Engineer &bull; Ahmedabad, India
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30">
                  Open to Opportunities
                </span>
              </div>

              {/* Core Strengths */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#1A201D]/70 border border-[#232B26] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#34D399]/10 border border-[#34D399]/20 text-[#34D399] shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#EAEAEA]">Full-Stack Architecture</h3>
                    <p className="text-[11px] text-[#8B8F8D] mt-0.5 leading-relaxed">
                      Building full-cycle web applications with Next.js, Node.js, PostgreSQL, Stripe payments, and AWS deployments.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1A201D]/70 border border-[#232B26] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#34D399]/10 border border-[#34D399]/20 text-[#34D399] shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#EAEAEA]">AI Vice Captain &bull; Developer Productivity</h3>
                    <p className="text-[11px] text-[#8B8F8D] mt-0.5 leading-relaxed">
                      Mentoring engineering peers on high-leverage AI tooling (Cursor, Claude, Gemini) and token-efficient coding pipelines.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1A201D]/70 border border-[#232B26] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#A78BFA]/10 border border-[#A78BFA]/20 text-[#A78BFA] shrink-0 mt-0.5">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-bold text-[#EAEAEA]">Academic Distinction</h3>
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-[#A78BFA]/15 text-[#A78BFA] border border-[#A78BFA]/30">9.73 CGPA</span>
                    </div>
                    <p className="text-[11px] text-[#8B8F8D] mt-0.5 leading-relaxed">
                      Ranked First Class with Distinction in BCA, backed by Python certification from IIT Bombay.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-2 border-t border-[#232B26]">
                <div className="flex items-center justify-between text-xs text-[#8B8F8D] mb-2">
                  <span className="font-semibold text-[#EAEAEA]">Core Technologies</span>
                  <span className="text-[11px] font-mono text-[#34D399] font-semibold">TypeScript / React / Node</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'AWS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#1A201D] text-[#EAEAEA] border border-[#232B26] hover:border-[#34D399]/40 hover:text-[#34D399] transition-colors"
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
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#232B26] grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {HIGHLIGHT_METRICS.map((metric, idx) => {
            const isStandoutMetric = metric.value.includes('CGPA') || metric.value.includes('Modules') || metric.value.includes('+');
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#141816] border border-[#232B26] hover:border-[#34D399]/40 transition-all group"
              >
                <div className={`text-xl sm:text-2xl font-extrabold ${isStandoutMetric ? 'text-[#A78BFA]' : 'text-[#34D399]'} font-mono tracking-tight group-hover:scale-105 transition-transform origin-left`}>
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-[#EAEAEA] mt-0.5">
                  {metric.label}
                </div>
                <div className="text-[11px] text-[#8B8F8D] mt-1 leading-normal font-medium">
                  {metric.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
