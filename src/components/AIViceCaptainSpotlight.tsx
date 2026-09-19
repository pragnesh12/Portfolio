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
    <section id="ai-leadership" className="py-20 sm:py-24 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300">
            <Building2 className="w-3.5 h-3.5 text-zinc-400" />
            <span>Nyusoft Solutions &bull; Internal Engineering Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer Productivity &amp; AI Tooling
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Alongside client engineering at Nyusoft Solutions, I serve internally as AI Vice Captain. We manage this responsibility within our engineering team to share practical developer workflows, benchmark IDE tooling, and ensure AI is applied deliberately with rigorous code review and strict type safety.
          </p>
        </div>

        {/* 4 Pillars Grid - Monochrome cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {AI_VICE_CAPTAIN_INITIATIVES.map((initiative, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                    {initiative.badge}
                  </span>
                  <Zap className="w-4 h-4 text-zinc-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {initiative.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {initiative.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-900 flex items-center gap-2 text-[11px] text-zinc-300 font-medium">
                <TrendingUp className="w-3.5 h-3.5 text-zinc-400" />
                <span>{initiative.impact}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Clear Principles */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 text-left shadow-xl">
          <div className="max-w-2xl mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-zinc-400" />
              <span>How We Approach AI in Daily Engineering</span>
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Practical guidelines that keep software delivery rapid, safe, and cost-effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                <span>Engineers Own the System Architecture</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Database models, API routes, and business rules are planned by engineers. AI is used to accelerate boilerplate, unit tests, and typing.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                <span>Strict Verification &amp; Type Safety</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Every line of code is verified with strict TypeScript types, schema validation (Zod/Prisma), and automated tests before landing in production.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                <span>Cost &amp; Context Optimization</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Providing scoped, relevant file context rather than entire repositories. This reduces token waste and yields significantly higher precision.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Users className="w-4 h-4 text-zinc-400" />
                <span>Knowledge Sharing &amp; Mentorship</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Regular hands-on walkthroughs of IDE workflows (Cursor, Windsurf, Claude) so every team member can level up their daily productivity.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Tech Talk / Step Up Session Showcase */}
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 text-left shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-zinc-900">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300">
                <Presentation className="w-3.5 h-3.5 text-zinc-400" />
                <span>Nyusoft Tech Talk &bull; STEP UP Series</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                STEP UP: Token-Efficient Code Reviews with code-review-graph
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Featured internal session co-presented with <strong>Karan Barodiya</strong> for our engineering teams at Nyusoft Solutions, demonstrating persistent graph-grounded code intelligence.
              </p>
            </div>

            {/* Speakers Badge */}
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-4 shrink-0">
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">Session Speakers</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <span className="w-2 h-2 rounded-full bg-zinc-400" />
                    <span>Pragnesh Rana</span>
                  </div>
                  <span className="text-zinc-600">&bull;</span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-300">
                    <span className="w-2 h-2 rounded-full bg-zinc-600" />
                    <span>Karan Barodiya</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Topics & Metrics Grid from PDF */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-1.5">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">What We Explored</span>
              <h4 className="text-sm font-bold text-white">Token-Efficient Reviews</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Reduce AI token usage and speed up code reviews with a persistent codebase graph.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-1.5">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">How It Works</span>
              <h4 className="text-sm font-bold text-white">Tree-sitter &amp; MCP</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Uses Tree-sitter and Model Context Protocol (MCP) to build structural AST understanding of repositories.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-1.5">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Performance Gains</span>
              <h4 className="text-sm font-bold text-white">Up to 49× Reduction</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Achieves up to 49× token reduction and significantly faster review workflows on large-scale production projects.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-1.5">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Cost Optimization</span>
              <h4 className="text-sm font-bold text-white">Up to 8× with Claude Code</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Minimized repetitive context-sharing and slashed AI token costs during real-world automated reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
