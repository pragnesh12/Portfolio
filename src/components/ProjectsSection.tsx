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
    <section id="projects" className="py-20 sm:py-24 border-b border-[#232B26] relative bg-[#0B0F0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 text-left">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141816] border border-[#232B26] text-xs font-semibold text-[#EAEAEA] shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-[#34D399]" />
              <span>Featured Engineering &bull; Production Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EAEAEA] tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-[#8B8F8D] text-sm sm:text-base leading-relaxed">
              Real-world production applications engineered with end-to-end ownership, from database schema architecture and payment orchestration to multi-tier cloud deployments.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#141816] border border-[#232B26] self-start md:self-auto shadow-inner">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-lg text-xs transition-all ${
                  selectedCategory === category
                    ? 'bg-[#34D399] text-[#0B0F0D] font-bold shadow-md shadow-[#34D399]/20'
                    : 'text-[#8B8F8D] hover:text-[#EAEAEA] hover:bg-[#1A201D]'
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
                className="rounded-2xl border border-[#232B26] bg-[#141816] hover:border-[#34D399]/40 transition-all shadow-xl shadow-black/40 overflow-hidden text-left"
              >
                {/* Project Header Bar */}
                <div className="p-6 sm:p-8 border-b border-[#232B26] bg-[#101412]">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30">
                          {project.category}
                        </span>
                        {/* Exactly ONE small client tag per card */}
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#1A201D] text-[#EAEAEA] border border-[#232B26] flex items-center gap-1.5">
                          <Building2 className="w-3 h-3 text-[#34D399]" />
                          <span>Client: Nyusoft Solutions</span>
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAEAEA] tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-[#8B8F8D] mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Metrics Quick Pills with Violet standout values */}
                    <div className="flex flex-wrap items-center gap-2">
                      {project.metrics?.map((m, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-[#1A201D] border border-[#232B26] text-left"
                        >
                          <span className="text-[10px] text-[#8B8F8D] block font-mono">
                            {m.label}
                          </span>
                          <span className="text-xs font-bold text-[#A78BFA]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tab Navigation for this Project */}
                  <div className="flex items-center gap-2 mt-6 pt-4 border-t border-[#232B26] overflow-x-auto pb-1 sm:pb-0">
                    <button
                      onClick={() => setProjectTab(project.id, 'overview')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                        currentTab === 'overview'
                          ? 'bg-[#34D399] text-[#0B0F0D] font-bold shadow-sm shadow-[#34D399]/20'
                          : 'text-[#8B8F8D] hover:text-[#EAEAEA] bg-[#1A201D] hover:bg-[#232B26] border border-[#232B26]'
                      }`}
                    >
                      Overview &amp; Outcomes
                    </button>
                    <button
                      onClick={() => setProjectTab(project.id, 'architecture')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                        currentTab === 'architecture'
                          ? 'bg-[#34D399] text-[#0B0F0D] font-bold shadow-sm shadow-[#34D399]/20'
                          : 'text-[#8B8F8D] hover:text-[#EAEAEA] bg-[#1A201D] hover:bg-[#232B26] border border-[#232B26]'
                      }`}
                    >
                      <Workflow className="w-3.5 h-3.5" />
                      <span>System Architecture</span>
                    </button>
                    <button
                      onClick={() => setProjectTab(project.id, 'technical')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                        currentTab === 'technical'
                          ? 'bg-[#34D399] text-[#0B0F0D] font-bold shadow-sm shadow-[#34D399]/20'
                          : 'text-[#8B8F8D] hover:text-[#EAEAEA] bg-[#1A201D] hover:bg-[#232B26] border border-[#232B26]'
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
                    <p className="text-[#EAEAEA] text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold text-[#34D399] uppercase tracking-wider mb-3">
                        Key Engineering Highlights
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-[#1A201D]/70 border border-[#232B26] flex items-start gap-2.5 text-xs text-[#EAEAEA] leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#34D399] mt-0.5 shrink-0" />
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
                    <div className="p-4 rounded-xl bg-[#1A201D]/60 border border-[#232B26] mb-4">
                      <h4 className="text-sm font-bold text-[#EAEAEA] flex items-center gap-2 mb-1">
                        <Server className="w-4 h-4 text-[#34D399]" />
                        <span>System Architecture &amp; Data Flow</span>
                      </h4>
                      <p className="text-xs text-[#8B8F8D]">
                        Modular tier breakdown illustrating client interface, application logic, data persistence, and external services.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Frontend Tier */}
                      <div className="p-4 rounded-xl bg-[#101412] border border-[#232B26] space-y-3">
                        <div className="flex items-center gap-2 text-[#EAEAEA] pb-2 border-b border-[#232B26]">
                          <Layers className="w-4 h-4 text-[#34D399]" />
                          <span className="text-xs font-bold uppercase tracking-wider">Client Tier</span>
                        </div>
                        <ul className="space-y-2 text-xs text-[#8B8F8D]">
                          {project.architecture.frontend.map((item, i) => (
                            <li key={i} className="p-2 rounded bg-[#1A201D] border border-[#232B26] font-mono text-[11px] text-[#EAEAEA]">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Backend Tier */}
                      <div className="p-4 rounded-xl bg-[#101412] border border-[#232B26] space-y-3">
                        <div className="flex items-center gap-2 text-[#EAEAEA] pb-2 border-b border-[#232B26]">
                          <Cpu className="w-4 h-4 text-[#34D399]" />
                          <span className="text-xs font-bold uppercase tracking-wider">API &amp; Logic</span>
                        </div>
                        <ul className="space-y-2 text-xs text-[#8B8F8D]">
                          {project.architecture.backend.map((item, i) => (
                            <li key={i} className="p-2 rounded bg-[#1A201D] border border-[#232B26] font-mono text-[11px] text-[#EAEAEA]">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Database Tier */}
                      <div className="p-4 rounded-xl bg-[#101412] border border-[#232B26] space-y-3">
                        <div className="flex items-center gap-2 text-[#EAEAEA] pb-2 border-b border-[#232B26]">
                          <Database className="w-4 h-4 text-[#34D399]" />
                          <span className="text-xs font-bold uppercase tracking-wider">Data &amp; Cache</span>
                        </div>
                        <ul className="space-y-2 text-xs text-[#8B8F8D]">
                          {project.architecture.database.map((item, i) => (
                            <li key={i} className="p-2 rounded bg-[#1A201D] border border-[#232B26] font-mono text-[11px] text-[#EAEAEA]">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Integrations Tier */}
                      <div className="p-4 rounded-xl bg-[#101412] border border-[#232B26] space-y-3">
                        <div className="flex items-center gap-2 text-[#EAEAEA] pb-2 border-b border-[#232B26]">
                          <Zap className="w-4 h-4 text-[#34D399]" />
                          <span className="text-xs font-bold uppercase tracking-wider">Services &amp; APIs</span>
                        </div>
                        <ul className="space-y-2 text-xs text-[#8B8F8D]">
                          {project.architecture.integrations.map((item, i) => (
                            <li key={i} className="p-2 rounded bg-[#1A201D] border border-[#232B26] font-mono text-[11px] text-[#EAEAEA]">
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
                      <div className="p-5 rounded-xl bg-[#1A201D]/70 border border-[#232B26] space-y-3">
                        <h4 className="text-xs font-bold text-[#34D399] uppercase tracking-wider flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                          <span>Security &amp; Invariants</span>
                        </h4>
                        <p className="text-xs text-[#8B8F8D] leading-relaxed">
                          {project.id === 'eyeneedadoc' &&
                            'Automated Stripe Connect escrow holding, split payouts upon verified shift completion, and automated no-show penalty enforcement with DocuSign legal verification.'}
                          {project.id === 'property-proof' &&
                            'Biometric & OTP dual-factor validation with multi-session token rotation, plus algorithmic DNA security-pin system computing counterfeit protection ratings.'}
                          {project.id === 'passfcps' &&
                            'Argon2 password hashing, dynamic Helmet security headers, rate limiting, and SHA-1 cryptographic deduplication on bulk XLSX imports.'}
                        </p>
                      </div>

                      <div className="p-5 rounded-xl bg-[#1A201D]/70 border border-[#232B26] space-y-3">
                        <h4 className="text-xs font-bold text-[#34D399] uppercase tracking-wider flex items-center gap-2">
                          <Zap className="w-4 h-4 text-[#34D399]" />
                          <span>Performance &amp; Scale</span>
                        </h4>
                        <p className="text-xs text-[#8B8F8D] leading-relaxed">
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

                {/* Card Footer Actions */}
                <div className="px-6 py-4 bg-[#101412] border-t border-[#232B26] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-[#8B8F8D]">
                    <Lock className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>Production Architecture &bull; Enterprise Grade</span>
                  </div>

                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#34D399] text-[#0B0F0D] font-bold hover:bg-[#2ecc8f] transition-all shadow-md shadow-[#34D399]/20"
                  >
                    <span>Discuss Implementation on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#0B0F0D]" />
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
