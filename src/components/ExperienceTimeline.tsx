import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Filter, 
  ChevronRight, 
  Building2, 
  Tag,
  Clock,
  Sparkles
} from 'lucide-react';
import { experiences } from '../data/portfolioData';
import { ExperienceItem } from '../types';

export const ExperienceTimeline: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('decodi');

  const categories = [
    { id: 'all', label: 'All Roles' },
    { id: 'it-systems', label: 'IT & Infrastructure' },
    { id: 'web-software', label: 'Web & Software' },
    { id: 'education-training', label: 'Teaching & Mentorship' },
  ];

  const filteredExperiences = selectedCategory === 'all'
    ? experiences
    : experiences.filter((exp) => exp.category === selectedCategory);

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#090a0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-bold text-red-300 uppercase tracking-wider">
            Work History
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Professional Experience & Milestones
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal">
            A proven record of reliability, technical administration, digital systems maintenance, and staff instruction across leading Ugandan institutions.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                  : 'bg-[#131622] text-slate-300 border border-slate-800 hover:bg-[#181c2b] hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 lg:ml-32 space-y-10">
          {filteredExperiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative pl-6 sm:pl-10 group"
              >
                {/* Node on Timeline */}
                <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-[#090a0f] border-4 border-red-500 shadow-md group-hover:scale-125 transition-transform" />

                {/* Card Container */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  className={`cursor-pointer p-6 sm:p-7 rounded-2xl bg-[#131622] border transition-all duration-300 ${
                    isExpanded
                      ? 'border-red-500/80 shadow-xl shadow-red-500/10'
                      : 'border-slate-800 hover:border-slate-700 hover:bg-[#161a28] shadow-md'
                  }`}
                >
                  {/* Card Header Top */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-red-400 transition-colors">
                          {exp.role}
                        </h3>
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#181c2b] text-slate-300 border border-slate-750">
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300">
                        <span className="flex items-center gap-1 font-medium text-slate-200">
                          <Building2 className="w-3.5 h-3.5 text-red-400" />
                          {exp.organization}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-amber-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-[#181c2b] text-slate-200 w-fit shrink-0 border border-slate-750">
                      <Calendar className="w-3.5 h-3.5 text-red-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mt-2 font-normal">
                    {exp.description}
                  </p>

                  {/* Expandable Key Highlights */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-5 pt-4 border-t border-slate-800 space-y-3"
                      >
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Key Achievements & Responsibilities
                        </h4>
                        
                        <div className="space-y-2.5">
                          {exp.highlights.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-normal">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Technologies Tags Footer */}
                  <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/80">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-[#181c2b] text-slate-300 border border-slate-750"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-semibold text-red-400 flex items-center gap-1 hover:underline ml-auto">
                      {isExpanded ? 'Hide details' : 'View achievements'}
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
                    </span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
