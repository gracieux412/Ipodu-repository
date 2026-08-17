import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  X,
  Printer,
  Copy,
  Check,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Cpu,
} from 'lucide-react';
import {
  personalInfo,
  experiences,
  skillCategories,
  education,
  cvExperienceIds,
  cvAdditionalExperience,
  coreTools,
} from '../data/portfolioData';

interface InteractiveResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveResumeModal: React.FC<InteractiveResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const cvExperiences = cvExperienceIds
    .map((id) => experiences.find((exp) => exp.id === id))
    .filter((exp): exp is NonNullable<typeof exp> => Boolean(exp));

  const cvEducation = education.slice(0, 2);
  const competencyLine = skillCategories.map((cat) => cat.skills.map((s) => s.name).join(', ')).join(' | ');

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const fullText = `
${personalInfo.name.toUpperCase()}
${personalInfo.title}
${personalInfo.email} | ${personalInfo.internationalPhone} | ${personalInfo.location}

PROFESSIONAL SUMMARY
${personalInfo.cvSummary}

CORE COMPETENCIES
${competencyLine}

EXPERIENCE
${cvExperiences.map((exp) => `
${exp.role} — ${exp.organization} (${exp.period})
${exp.highlights.slice(0, 2).map((item) => `• ${item}`).join('\n')}
`).join('\n')}
${cvAdditionalExperience.length ? `\nADDITIONAL EXPERIENCE\n${cvAdditionalExperience.map((item) => `• ${item}`).join('\n')}` : ''}

EDUCATION
${cvEducation.map((item) => `${item.degree} — ${item.institution} (${item.period})${item.score ? `\n${item.score}` : ''}`).join('\n\n')}

TOOLS
${coreTools.join(' • ')}
    `.trim();

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-3xl bg-[#0f121d] text-slate-200 rounded-3xl shadow-2xl border border-slate-800 my-6 flex flex-col max-h-[92vh] overflow-hidden print:max-h-none print:shadow-none print:border-none print:rounded-none print:max-w-none"
      >
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-[#131622] print:hidden shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
            <h3 className="font-heading font-bold text-sm sm:text-base text-white">
              Curriculum Vitae — {personalInfo.name}
            </h3>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#1e2337] text-slate-200 hover:bg-[#282f49] hover:text-white transition-colors border border-slate-700 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          id="printable-cv-content"
          className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-6 bg-[#0f121d] print:p-8 print:bg-white print:text-black print:space-y-5 print:text-[11px] print:leading-snug"
        >
          <div className="border-b-2 border-slate-700 print:border-black pb-5 print:pb-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight uppercase print:text-black print:text-[22px]">
                  {personalInfo.name}
                </h1>
                <p className="text-sm font-semibold text-red-400 mt-1 print:text-red-700">
                  {personalInfo.title}
                </p>
              </div>

              <div className="text-xs text-slate-300 space-y-1 sm:text-right print:text-neutral-800">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-red-400 print:hidden" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 print:hidden" />
                  <span>{personalInfo.internationalPhone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 print:hidden" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed print:text-neutral-800 print:mt-3">
              {personalInfo.cvSummary}
            </p>
          </div>

          <div className="space-y-2 print:space-y-1.5">
            <h2 className="cv-section-title">
              <Cpu className="w-3.5 h-3.5 print:hidden" />
              <span>Core Competencies</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs print:text-[10px]">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="print:break-inside-avoid">
                  <span className="font-bold text-white print:text-black">{cat.name}: </span>
                  <span className="text-slate-300 print:text-neutral-800">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 print:space-y-2">
            <h2 className="cv-section-title">
              <Briefcase className="w-3.5 h-3.5 print:hidden" />
              <span>Professional Experience</span>
            </h2>

            <div className="space-y-4 print:space-y-3">
              {cvExperiences.map((exp) => (
                <div key={exp.id} className="print:break-inside-avoid">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <p className="text-xs sm:text-sm font-bold text-white print:text-black">
                      {exp.role} — {exp.organization}
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-400 font-semibold print:text-neutral-700 shrink-0">
                      {exp.period}
                    </p>
                  </div>
                  <ul className="mt-1 space-y-0.5 text-xs text-slate-300 print:text-neutral-800">
                    {exp.highlights.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="leading-snug">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {cvAdditionalExperience.length > 0 && (
              <div className="pt-1">
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400 print:text-neutral-600 mb-1">
                  Additional Experience
                </p>
                <ul className="space-y-0.5 text-xs text-slate-300 print:text-neutral-800">
                  {cvAdditionalExperience.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-2 print:space-y-1.5">
            <h2 className="cv-section-title">
              <GraduationCap className="w-3.5 h-3.5 print:hidden" />
              <span>Education</span>
            </h2>
            <div className="space-y-2 print:space-y-1.5">
              {cvEducation.map((item) => (
                <div key={item.id} className="print:break-inside-avoid">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <p className="text-xs sm:text-sm font-bold text-white print:text-black">
                      {item.degree}
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-400 font-semibold print:text-neutral-700">
                      {item.period}
                    </p>
                  </div>
                  <p className="text-xs text-slate-300 print:text-neutral-800">
                    {item.institution}{item.score ? ` — ${item.score}` : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 print:space-y-1">
            <h2 className="cv-section-title">
              <span>Tools & Platforms</span>
            </h2>
            <p className="text-xs text-slate-300 print:text-neutral-800">
              {coreTools.join(' • ')}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
