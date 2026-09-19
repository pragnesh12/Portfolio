import React from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Compass, 
  ExternalLink,
  Trophy,
  Presentation,
  ShieldCheck
} from 'lucide-react';
import { EDUCATION_LIST, CERTIFICATIONS, INTERESTS } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-24 border-b border-[#232B26] relative bg-[#0B0F0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141816] border border-[#232B26] text-xs font-semibold text-[#EAEAEA] shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-[#34D399]" />
            <span>Academic Performance &bull; Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EAEAEA] tracking-tight">
            Education &amp; Credentials
          </h2>
          <p className="text-[#8B8F8D] text-sm sm:text-base leading-relaxed">
            Distinguished academic score of <strong className="text-[#A78BFA] font-bold font-mono">9.73 CGPA</strong> paired with verified credentials from IIT Bombay and Deakin University.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          {/* Left Column: Education (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-base font-bold text-[#EAEAEA] flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#34D399]" />
              <span>Academic Degrees</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION_LIST.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#141816] border border-[#232B26] hover:border-[#34D399]/40 transition-all space-y-3 shadow-xl shadow-black/40"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-[#EAEAEA]">
                        {edu.degree}
                      </h4>
                      <p className="text-xs font-medium text-[#8B8F8D] mt-0.5">
                        {edu.institution} &bull; {edu.location}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-[#A78BFA]/15 text-[#A78BFA] border border-[#A78BFA]/30 shadow-sm">
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#8B8F8D] font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>{edu.period}</span>
                  </div>

                  <p className="text-xs text-[#EAEAEA] leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Engineering Values / Focus */}
            <div className="p-6 rounded-2xl bg-[#141816] border border-[#232B26] space-y-3 shadow-xl">
              <h4 className="text-xs font-bold text-[#34D399] uppercase tracking-wider flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#34D399]" />
                <span>Areas of Continued Focus</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1A201D] text-[#EAEAEA] border border-[#232B26] hover:border-[#34D399]/40 hover:text-[#34D399] transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Honors, Talks & Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-base font-bold text-[#EAEAEA] flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#34D399]" />
              <span>Honors, Tech Talks &amp; Certifications</span>
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => {
                const isAward = cert.category === 'award';
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#141816] border border-[#232B26] hover:border-[#34D399]/40 transition-all space-y-3 shadow-xl shadow-black/40"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        {cert.badge && (
                          <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                            isAward 
                              ? 'bg-[#A78BFA]/10 text-[#A78BFA] border border-[#A78BFA]/30'
                              : 'bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30'
                          }`}>
                            {cert.category === 'award' ? (
                              <Trophy className="w-3 h-3 text-[#A78BFA]" />
                            ) : cert.category === 'workshop' ? (
                              <Presentation className="w-3 h-3 text-[#34D399]" />
                            ) : (
                              <ShieldCheck className="w-3 h-3 text-[#34D399]" />
                            )}
                            <span>{cert.badge}</span>
                          </div>
                        )}
                        <h4 className="text-sm font-bold text-[#EAEAEA] leading-snug">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-[#8B8F8D] font-medium">
                          {cert.issuer}
                        </p>
                      </div>

                      {cert.score && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#A78BFA]/15 text-[#A78BFA] border border-[#A78BFA]/30 shrink-0">
                          {cert.score}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#EAEAEA] leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="pt-2 border-t border-[#232B26] flex items-center justify-between text-[11px] text-[#8B8F8D] font-mono">
                      <span>Year: {cert.date}</span>
                      <span className={`font-semibold ${isAward ? 'text-[#A78BFA]' : 'text-[#34D399]'}`}>
                        {cert.category === 'award' ? 'Honored' : cert.category === 'workshop' ? 'Delivered' : 'Verified'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
