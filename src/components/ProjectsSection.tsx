import React, { useState } from 'react';
import { 
  Building2,
  Calendar,
  MapPin,
  ExternalLink,
  Layers,
  Sparkles,
  Server,
  Database,
  Cpu,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Lock
} from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTabMap, setActiveTabMap] = useState<Record<string, 'overview' | 'architecture' | 'technical'>>({
    'eyeneedadoc': 'overview',
    'property-proof': 'overview',
    'passfcps': 'overview',
  });

  const categories = ['All', 'Full-Stack', 'AI & Platform', 'Monorepo & EdTech'];

  const setProjectTab = (projectId: string, tab: 'overview' | 'architecture' | 'technical') => {
    setActiveTabMap(prev => ({ ...prev, [projectId]: tab }));
  };

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-24 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 text-left">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300">
              <Building2 className="w-3.5 h-3.5 text-zinc-400" />
              <span>Production Client Solutions &bull; Nyusoft Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Real-world client applications engineered during my tenure at Nyusoft Solutions. 
              Each platform reflects complete end-to-end responsibility, from database schema design and payment flows to multi-tier cloud deployments.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-zinc-900/90 border border-zinc-800 self-start md:self-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs transition-all ${
                  selectedCategory === category
                    ? 'bg-white text-black font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-10 sm:space-y-12">
          {filteredProjects.map((project) => {
            const currentTab = activeTabMap[project.id] || 'overview';

            return (
              <div
                key={project.id}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition-all shadow-xl overflow-hidden text-left"
              >
                {/* Project Header Bar */}
                <div className="p-6 sm:p-8 border-b border-zinc-900 bg-zinc-900/40">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-zinc-900 text-zinc-300 border border-zinc-800">
                          {project.category}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 flex items-center gap-1.5">
                          <Building2 className="w-3 h-3 text-zinc-400" />
                          <span>Nyusoft Solutions</span>
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-zinc-400 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Metrics Quick Pills */}
                    <div className="flex flex-wrap items-center gap-2">
                      {project.metrics?.map((m, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-left"
                        >
                          <span className="text-[10px] text-zinc-400 block font-mono">
                            {m.label}
                          </span>
                          <span className="text-xs font-bold text-white">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tab Navigation for this Project */}
                  <div className="flex items-center gap-2 mt-6 pt-4 border-t border-zinc-800/80 overflow-x-auto pb-1 sm:pb-0">
                    <button
                      onClick={() => setProjectTab(project.id, 'overview')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                        currentTab === 'overview'
                          ? 'bg-white text-black'
                          : 'text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800'
                      }`}
                    >
                      Overview &amp; Outcomes
                    </button>
                    <button
                      onClick={() => setProjectTab(project.id, 'architecture')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                        currentTab === 'architecture'
                          ? 'bg-white text-black'
                          : 'text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800'
                      }`}
                    >
                      <Workflow className="w-3.5 h-3.5" />
                      <span>System Architecture</span>
                    </button>
                    <button
                      onClick={() => setProjectTab(project.id, 'technical')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                        currentTab === 'technical'
                          ? 'bg-white text-black'
                          : 'text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800'
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Security &amp; Performance</span>
                    </button>
                  </div>
                </div>

                {/* Tab 1: Overview */}
                {currentTab === 'overview' && (
                  <div className="p-6 sm:p-8 space-y-6">
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                        Key Engineering Highlights
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Interactive Architecture Diagram */}
                {currentTab === 'architecture' && (
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 mb-4">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-1">
                        <Server className="w-4 h-4 text-zinc-300" />
                        <span>System Architecture &amp; Data Flow</span>
                      </h4>
                      <p className="text-xs text-zinc-400">
                        Modular tier breakdown illustrating client interface, application logic, data persistence, and external services.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Frontend Tier */}
                      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3">
                        <div className="flex items-center gap-2 text-white pb-2 border-b border-zinc-800">
                          <Layers className="w-4 h-4 text-zinc-400" />
                          <span className="text-xs font-bold uppercase tracking-wider">Client Tier</span>
                        </div>
                        <ul className="space-y-2 text-xs text-zinc-300">
                          {project.architecture.frontend.map((item, i) => (
                            <li key={i} className="p-2 rounded bg-zinc-900 border border-zinc-800 font-mono text-[11px]">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Backend Tier */}
                      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3">
                        <div className="flex items-center gap-2 text-white pb-2 border-b border-zinc-800">
                          <Cpu className="w-4 h-4 text-zinc-400" />
                          <span className="text-xs font-bold uppercase tracking-wider">API &amp; Logic</span>
                        </div>
                        <ul className="space-y-2 text-xs text-zinc-300">
                          {project.architecture.backend.map((item, i) => (
                            <li key={i} className="p-2 rounded bg-zinc-900 border border-zinc-800 font-mono text-[11px]">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Database Tier */}
                      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3">
                        <div className="flex items-center gap-2 text-white pb-2 border-b border-zinc-800">
                          <Database className="w-4 h-4 text-zinc-400" />
                          <span className="text-xs font-bold uppercase tracking-wider">Data &amp; Cache</span>
                        </div>
                        <ul className="space-y-2 text-xs text-zinc-300">
                          {project.architecture.database.map((item, i) => (
                            <li key={i} className="p-2 rounded bg-zinc-900 border border-zinc-800 font-mono text-[11px]">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Integrations Tier */}
                      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3">
                        <div className="flex items-center gap-2 text-white pb-2 border-b border-zinc-800">
                          <Zap className="w-4 h-4 text-zinc-400" />
                          <span className="text-xs font-bold uppercase tracking-wider">Services &amp; APIs</span>
                        </div>
                        <ul className="space-y-2 text-xs text-zinc-300">
                          {project.architecture.integrations.map((item, i) => (
                            <li key={i} className="p-2 rounded bg-zinc-900 border border-zinc-800 font-mono text-[11px]">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Technical Rigor */}
                {currentTab === 'technical' && (
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-zinc-400" />
                          <span>Security &amp; Invariants</span>
                        </h4>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {project.id === 'eyeneedadoc' &&
                            'Automated Stripe Connect escrow holding, split payouts upon verified shift completion, and automated no-show penalty enforcement with DocuSign legal verification.'}
                          {project.id === 'property-proof' &&
                            'Biometric & OTP dual-factor validation with multi-session token rotation, plus algorithmic DNA security-pin system computing counterfeit protection ratings.'}
                          {project.id === 'passfcps' &&
                            'Argon2 password hashing, dynamic Helmet security headers, rate limiting, and SHA-1 cryptographic deduplication on bulk XLSX imports.'}
                        </p>
                      </div>

                      <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                          <Zap className="w-4 h-4 text-zinc-400" />
                          <span>Performance &amp; Scale</span>
                        </h4>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {project.id === 'eyeneedadoc' &&
                            'Low-latency WebSocket connections via Socket.io for instantaneous multi-party shift bidding, backed by AWS S3 and automated Puppeteer billing receipts.'}
                          {project.id === 'property-proof' &&
                            'Asynchronous worker pipelines powered by BullMQ & Redis, keeping image classification response times sub-second without locking Express event loops.'}
                          {project.id === 'passfcps' &&
                            'Timed mock-exam session resumption engine handling browser drops gracefully, with background percentile calculations across tens of thousands of mock submissions.'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Footer Actions (GitHub link removed as requested; enterprise client project notice added) */}
                <div className="px-6 py-4 bg-zinc-900/50 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Lock className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Proprietary Client Architecture &bull; Nyusoft Solutions</span>
                  </div>

                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition-colors shadow-sm"
                  >
                    <span>Discuss Implementation on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
