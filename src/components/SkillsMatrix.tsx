import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Database, 
  Server, 
  Sparkles, 
  ShieldCheck, 
  Search, 
  Cpu,
  Check
} from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend & APIs', 'Databases & Cache', 'DevOps & Cloud', 'AI & Developer Tooling'];

  const filteredGroups = SKILL_GROUPS.map((group) => {
    const matchesCategory = selectedCategory === 'All' || group.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(group.category.toLowerCase());
    if (!matchesCategory) return null;

    const filteredSkills = group.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery && filteredSkills.length === 0) return null;

    return {
      ...group,
      skills: filteredSkills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 sm:py-24 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300">
              <Cpu className="w-3.5 h-3.5 text-zinc-400" />
              <span>Technical Repertoire</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills &amp; Technologies
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Full-stack competencies spanning modern JavaScript/TypeScript ecosystems, database design, API security, and AI tooling.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skill (e.g. Docker, Next)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
            />
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredGroups.map((group, idx) => {
            if (!group) return null;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all shadow-xl space-y-4"
              >
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white">
                      <Cpu className="w-4 h-4 text-zinc-400" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-white">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {group.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        skill.highlight
                          ? 'bg-zinc-800 text-white border border-zinc-600 font-semibold'
                          : 'bg-zinc-900 text-zinc-300 border border-zinc-800'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
