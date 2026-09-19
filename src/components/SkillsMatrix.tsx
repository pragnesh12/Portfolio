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
    <section id="skills" className="py-20 sm:py-24 border-b border-[#232B26] relative bg-[#0B0F0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 text-left">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141816] border border-[#232B26] text-xs font-semibold text-[#EAEAEA] shadow-sm">
              <Cpu className="w-3.5 h-3.5 text-[#34D399]" />
              <span>Technical Repertoire</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EAEAEA] tracking-tight">
              Skills &amp; Technologies
            </h2>
            <p className="text-[#8B8F8D] text-sm sm:text-base leading-relaxed">
              Full-stack competencies spanning modern JavaScript/TypeScript ecosystems, database architecture, API security, and high-efficiency AI tooling.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#34D399] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skill (e.g. Docker, Next)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#141816] border border-[#232B26] rounded-xl text-xs text-[#EAEAEA] placeholder-[#8B8F8D] focus:outline-none focus:border-[#34D399]/60 shadow-inner"
            />
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#141816] border border-[#232B26] mb-10 self-start inline-flex shadow-inner">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#34D399] text-[#0B0F0D] font-bold shadow-md shadow-[#34D399]/20'
                  : 'text-[#8B8F8D] hover:text-[#EAEAEA] hover:bg-[#1A201D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredGroups.map((group, idx) => {
            if (!group) return null;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#141816] border border-[#232B26] hover:border-[#34D399]/40 transition-all shadow-xl shadow-black/40 space-y-4 group"
              >
                <div className="flex items-center justify-between border-b border-[#232B26] pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#1A201D] border border-[#232B26] text-[#34D399] group-hover:border-[#34D399]/40 transition-colors">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-[#EAEAEA]">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#8B8F8D]">
                    {group.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill, sIdx) => {
                    return (
                      <span
                        key={sIdx}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          skill.highlight
                            ? 'bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/40 font-semibold shadow-sm'
                            : 'bg-[#1A201D] text-[#EAEAEA] border border-[#232B26] hover:border-[#34D399]/40 hover:text-[#34D399]'
                        }`}
                      >
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
