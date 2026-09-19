import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Briefcase,
  ChevronRight,
  Trophy
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 border-b border-[#232B26] relative bg-[#0B0F0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141816] border border-[#232B26] text-xs font-semibold text-[#EAEAEA] shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-[#34D399]" />
            <span>Work History &bull; Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EAEAEA] tracking-tight">
            Professional Experience
          </h2>
          <p className="text-[#8B8F8D] text-sm sm:text-base leading-relaxed">
            Hands-on software development across enterprise web applications, distributed backend services, and engineering leadership.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 text-left">
          {EXPERIENCES.map((exp, idx) => {
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#141816] border border-[#232B26] hover:border-[#34D399]/40 transition-all shadow-xl shadow-black/40"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#232B26] pb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-lg sm:text-xl font-bold text-[#EAEAEA]">
                        {exp.role}
                      </span>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30">
                          Current Position
                        </span>
                      )}
                      {exp.company.includes('Koolmind') && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#A78BFA]/15 text-[#A78BFA] border border-[#A78BFA]/30 shadow-sm">
                          <Trophy className="w-3 h-3 text-[#A78BFA]" />
                          <span>Awarded Outstanding Team Player</span>
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#8B8F8D]">
                      <span className="flex items-center gap-1.5 font-medium text-[#EAEAEA]">
                        <Building2 className="w-3.5 h-3.5 text-[#34D399]" />
                        {exp.company}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1.5 text-[#8B8F8D]">
                        <MapPin className="w-3.5 h-3.5 text-[#8B8F8D]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#34D399] bg-[#1A201D] px-3.5 py-1.5 rounded-lg border border-[#232B26] self-start md:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="pt-6 space-y-3">
                  <h4 className="text-xs font-bold text-[#34D399] uppercase tracking-wider">
                    Key Impact &amp; Contributions
                  </h4>
                  <div className="space-y-2.5">
                    {exp.achievements.map((achievement, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-[#EAEAEA] leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#34D399] mt-0.5 shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="pt-6 mt-6 border-t border-[#232B26] flex flex-wrap items-center gap-2">
                  <span className="text-xs text-[#8B8F8D] font-medium mr-1">
                    Environment:
                  </span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#1A201D] text-[#EAEAEA] border border-[#232B26] hover:border-[#34D399]/40 hover:text-[#34D399] transition-colors"
                    >
                      {skill}
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
