import React from 'react';
import { 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  ShieldCheck,
  Users,
  Compass,
  Building2,
  Presentation,
  FileCode2,
  Workflow,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { AI_VICE_CAPTAIN_INITIATIVES } from '../data/portfolioData';

export const AIViceCaptainSpotlight: React.FC = () => {
  return (
    <section id="ai-leadership" className="py-20 sm:py-24 border-b border-[#232B26] relative bg-[#0B0F0D]">
      {/* Subtle secondary ambient glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[300px] bg-[#34D399]/[0.02] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141816] border border-[#232B26] text-xs font-semibold text-[#EAEAEA] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#34D399]" />
            <span>Engineering Leadership &bull; AI Tooling &amp; Productivity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EAEAEA] tracking-tight">
            Developer Productivity &amp; AI Tooling
          </h2>
          <p className="text-[#8B8F8D] text-sm sm:text-base leading-relaxed">
            As AI Vice Captain, I champion structured, high-leverage developer workflows that integrate modern AI tools without sacrificing engineering rigor. My focus centers on tooling benchmarks, AST code intelligence, and context-efficient architectures—delivering measurable outcomes including <span className="text-[#A78BFA] font-bold font-mono">49×</span> token reduction and <span className="text-[#A78BFA] font-bold font-mono">8×</span> cost savings in production code reviews.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {AI_VICE_CAPTAIN_INITIATIVES.map((initiative, idx) => {
            const isCostOrToken = initiative.badge.includes('Cost') || initiative.badge.includes('Graph') || initiative.badge.includes('Token');
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-[#141816] border border-[#232B26] hover:border-[#34D399]/40 transition-all text-left flex flex-col justify-between group shadow-lg shadow-black/30"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded ${
                      isCostOrToken 
                        ? 'bg-[#A78BFA]/10 text-[#A78BFA] border border-[#A78BFA]/30' 
                        : 'bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30'
                    }`}>
                      {initiative.badge}
                    </span>
                    <Zap className={`w-4 h-4 ${isCostOrToken ? 'text-[#A78BFA]' : 'text-[#34D399]'} group-hover:scale-110 transition-transform`} />
                  </div>
                  <h3 className="text-base font-bold text-[#EAEAEA] mb-2">
                    {initiative.title}
                  </h3>
                  <p className="text-xs text-[#8B8F8D] leading-relaxed font-normal">
                    {initiative.description}
                  </p>
                </div>

                <div className={`mt-5 pt-3 border-t border-[#232B26] flex items-center gap-2 text-[11px] font-semibold ${
                  isCostOrToken ? 'text-[#A78BFA]' : 'text-[#34D399]'
                }`}>
                  <TrendingUp className={`w-3.5 h-3.5 ${isCostOrToken ? 'text-[#A78BFA]' : 'text-[#34D399]'}`} />
                  <span>{initiative.impact}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Clear Principles */}
        <div className="rounded-2xl border border-[#232B26] bg-[#141816] p-6 sm:p-8 text-left shadow-xl">
          <div className="max-w-2xl mb-6">
            <h3 className="text-lg font-bold text-[#EAEAEA] flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#34D399]" />
              <span>How We Approach AI in Daily Engineering</span>
            </h3>
            <p className="text-xs text-[#8B8F8D] mt-1">
              Practical guidelines that keep software delivery rapid, safe, and cost-effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-5 rounded-xl bg-[#1A201D]/70 border border-[#232B26] space-y-2">
              <div className="flex items-center gap-2 text-[#EAEAEA] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                <span>Engineers Own the System Architecture</span>
              </div>
              <p className="text-xs text-[#8B8F8D] leading-relaxed">
                Database models, API routes, and business rules are planned by engineers. AI is used to accelerate boilerplate, unit tests, and typing.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#1A201D]/70 border border-[#232B26] space-y-2">
              <div className="flex items-center gap-2 text-[#EAEAEA] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                <span>Strict Verification &amp; Type Safety</span>
              </div>
              <p className="text-xs text-[#8B8F8D] leading-relaxed">
                Every line of code is verified with strict TypeScript types, schema validation (Zod/Prisma), and automated tests before landing in production.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#1A201D]/70 border border-[#232B26] space-y-2">
              <div className="flex items-center gap-2 text-[#EAEAEA] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                <span>Cost &amp; Context Optimization</span>
              </div>
              <p className="text-xs text-[#8B8F8D] leading-relaxed">
                Providing scoped, relevant file context rather than entire repositories. This reduces token waste and yields significantly higher precision.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#1A201D]/70 border border-[#232B26] space-y-2">
              <div className="flex items-center gap-2 text-[#EAEAEA] font-bold text-sm">
                <Users className="w-4 h-4 text-[#34D399]" />
                <span>Knowledge Sharing &amp; Mentorship</span>
              </div>
              <p className="text-xs text-[#8B8F8D] leading-relaxed">
                Regular hands-on walkthroughs of IDE workflows (Cursor, Windsurf, Claude) so every team member can level up their daily productivity.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Tech Talk / Step Up Session Showcase */}
        <div className="mt-8 rounded-2xl border border-[#232B26] bg-[#141816] p-6 sm:p-8 text-left shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#232B26]">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A201D] border border-[#232B26] text-xs font-semibold text-[#EAEAEA]">
                <Presentation className="w-3.5 h-3.5 text-[#34D399]" />
                <span>Featured Technical Talk &bull; STEP UP Series</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#EAEAEA] tracking-tight">
                STEP UP: Token-Efficient Code Reviews with code-review-graph
              </h3>
              <p className="text-xs sm:text-sm text-[#8B8F8D] leading-relaxed">
                Internal engineering masterclass demonstrating persistent graph-grounded code intelligence (Tree-sitter, MCP) for large-scale repositories.
              </p>
            </div>

            {/* Speaker Badge */}
            <div className="p-4 rounded-xl bg-[#1A201D] border border-[#232B26] flex items-center gap-4 shrink-0">
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8B8F8D] block mb-1">Session Speaker</span>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#EAEAEA]">
                  <span className="w-2 h-2 rounded-full bg-[#34D399]" />
                  <span>Pragnesh Rana</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Topics & Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-[#101412] border border-[#232B26] space-y-1.5">
              <span className="text-[11px] font-mono text-[#34D399] uppercase tracking-wider">What We Explored</span>
              <h4 className="text-sm font-bold text-[#EAEAEA]">Token-Efficient Reviews</h4>
              <p className="text-xs text-[#8B8F8D] leading-relaxed">
                Reduce AI token usage and speed up code reviews with a persistent codebase graph.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#101412] border border-[#232B26] space-y-1.5">
              <span className="text-[11px] font-mono text-[#34D399] uppercase tracking-wider">How It Works</span>
              <h4 className="text-sm font-bold text-[#EAEAEA]">Tree-sitter &amp; MCP</h4>
              <p className="text-xs text-[#8B8F8D] leading-relaxed">
                Uses Tree-sitter and Model Context Protocol (MCP) to build structural AST understanding of repositories.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#101412] border border-[#A78BFA]/30 space-y-1.5">
              <span className="text-[11px] font-mono text-[#A78BFA] uppercase tracking-wider font-semibold">Performance Gains</span>
              <h4 className="text-sm font-bold text-[#A78BFA] font-mono">Up to 49× Reduction</h4>
              <p className="text-xs text-[#8B8F8D] leading-relaxed">
                Achieved up to 49× token reduction and significantly faster review workflows on large-scale production projects.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#101412] border border-[#A78BFA]/30 space-y-1.5">
              <span className="text-[11px] font-mono text-[#A78BFA] uppercase tracking-wider font-semibold">Cost Optimization</span>
              <h4 className="text-sm font-bold text-[#A78BFA] font-mono">Up to 8× with Claude Code</h4>
              <p className="text-xs text-[#8B8F8D] leading-relaxed">
                Minimized repetitive context-sharing and slashed AI token costs during real-world automated reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
