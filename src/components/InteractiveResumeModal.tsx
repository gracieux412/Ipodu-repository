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
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { personalInfo, experiences, skillCategories } from '../data/portfolioData';

interface InteractiveResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveResumeModal: React.FC<InteractiveResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const fullText = `
CURRICULUM VITAE
================
NAME: ${personalInfo.name}
TITLE: ${personalInfo.title}
EMAIL: ${personalInfo.email}
PHONE: ${personalInfo.internationalPhone}
LOCATION: ${personalInfo.location}

PROFESSIONAL SUMMARY:
${personalInfo.bio}

WORK EXPERIENCE:
${experiences.map(e => `
- ${e.role} | ${e.organization} (${e.period})
  Location: ${e.location}
  ${e.highlights.map(h => `  * ${h}`).join('\n')}
`).join('\n')}

KEY TECHNICAL SKILLS:
${skillCategories.map(cat => `
- ${cat.name}:
  ${cat.skills.map(s => s.name).join(', ')}
`).join('\n')}
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
        className="relative w-full max-w-4xl bg-[#0f121d] text-slate-200 rounded-3xl shadow-2xl border border-slate-800 my-6 flex flex-col max-h-[92vh] overflow-hidden print:max-h-none print:shadow-none print:border-none print:rounded-none"
      >
        {/* Modal Top Control Bar (Hidden during Print) */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-[#131622] print:hidden shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
            <h3 className="font-heading font-bold text-sm sm:text-base text-white">
              Official Curriculum Vitae — {personalInfo.name}
            </h3>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#1e2337] text-slate-200 hover:bg-[#282f49] hover:text-white transition-colors border border-slate-700 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Plaintext'}</span>
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

        {/* Printable CV Content Body */}
        <div id="printable-cv-content" className="p-6 sm:p-10 md:p-12 overflow-y-auto space-y-8 bg-[#0f121d] print:p-4 print:bg-white print:text-black">
          
          {/* CV Header */}
          <div className="border-b-2 border-slate-700 print:border-black pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight uppercase print:text-black">
                  {personalInfo.name}
                </h1>
                <p className="text-base font-semibold text-red-400 mt-1 print:text-red-700">
                  {personalInfo.title}
                </p>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 space-y-1 sm:text-right print:text-neutral-800">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-red-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{personalInfo.internationalPhone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="mt-5 pt-4 border-t border-slate-800 print:border-neutral-300">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal print:text-neutral-800">
                {personalInfo.bio}
              </p>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div className="space-y-4">
            <h2 className="text-sm font-extrabold font-heading uppercase tracking-widest text-red-400 border-b border-slate-800 pb-1.5 print:text-red-700 print:border-neutral-300 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Professional Work Experience</span>
            </h2>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold">
                    <span className="text-white print:text-black">
                      {exp.role} — <span className="text-slate-300 font-medium">{exp.organization} ({exp.location})</span>
                    </span>
                    <span className="text-slate-400 font-semibold print:text-neutral-700">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 print:text-neutral-800 font-normal">
                    {exp.description}
                  </p>

                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-1 print:text-neutral-800 font-normal">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="leading-normal">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-3">
            <h2 className="text-sm font-extrabold font-heading uppercase tracking-widest text-red-400 border-b border-slate-800 pb-1.5 print:text-red-700 print:border-neutral-300 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Technical & Management Competencies</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-3.5 rounded-xl bg-[#181c2b] border border-slate-750 print:bg-transparent print:border-none print:p-0">
                  <div className="font-bold text-white mb-1.5 print:text-black flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                    <span>{cat.name}</span>
                  </div>
                  <div className="text-slate-300 font-normal leading-relaxed print:text-neutral-800">
                    {cat.skills.map((s) => s.name).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
