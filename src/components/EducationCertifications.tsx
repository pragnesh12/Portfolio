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
    <section id="education" className="py-20 sm:py-24 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300">
            <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
            <span>Academic Performance &bull; Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Credentials
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Distinguished academic score of 9.73 CGPA paired with verified credentials from IIT Bombay and Deakin University.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          {/* Left Column: Education (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-zinc-400" />
              <span>Academic Degrees</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION_LIST.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all space-y-3 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-xs font-medium text-zinc-400 mt-0.5">
                        {edu.institution} &bull; {edu.location}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-zinc-900 text-white border border-zinc-700">
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{edu.period}</span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Engineering Values / Focus */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-zinc-400" />
                <span>Areas of Continued Focus</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Honors, Talks & Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Trophy className="w-4 h-4 text-zinc-400" />
              <span>Honors, Tech Talks &amp; Certifications</span>
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-zinc-950 border transition-all space-y-3 shadow-xl ${
                    cert.category === 'award'
                      ? 'border-zinc-700 bg-zinc-950/90'
                      : 'border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      {cert.badge && (
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-900 text-zinc-300 border border-zinc-800">
                          {cert.category === 'award' ? (
                            <Trophy className="w-3 h-3 text-zinc-300" />
                          ) : cert.category === 'workshop' ? (
                            <Presentation className="w-3 h-3 text-zinc-300" />
                          ) : (
                            <ShieldCheck className="w-3 h-3 text-zinc-300" />
                          )}
                          <span>{cert.badge}</span>
                        </div>
                      )}
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-zinc-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>

                    {cert.score && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-zinc-900 text-white border border-zinc-700 shrink-0">
                        {cert.score}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="pt-2 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                    <span>Year: {cert.date}</span>
                    <span className="text-zinc-400 font-semibold">
                      {cert.category === 'award' ? 'Honored' : cert.category === 'workshop' ? 'Delivered' : 'Verified'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
