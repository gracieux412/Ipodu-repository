import React from 'react';
import { motion } from 'motion/react';
import { Server, Code2, Database, Palette, Users, Cpu } from 'lucide-react';
import { skillCategories, coreTools } from '../data/portfolioData';

export const SkillsGrid: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return Server;
      case 'Code':
        return Code2;
      case 'Database':
        return Database;
      case 'Palette':
        return Palette;
      case 'Users':
        return Users;
      default:
        return Cpu;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#0d0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-bold text-red-300 uppercase tracking-wider">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Skills & Technical Abilities
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal">
            Broad expertise across IT systems, web and database management, creative media, and team training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
          {skillCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.iconName);
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="p-5 rounded-2xl bg-[#131622] border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-normal">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#181c2b] text-slate-200 border border-slate-750"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="pt-6 border-t border-slate-800">
          <div className="text-center mb-5">
            <h3 className="text-lg font-bold font-heading text-white">
              Key Tools & Platforms
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
            {coreTools.map((tool) => (
              <span
                key={tool}
                className="text-xs font-semibold px-3.5 py-2 rounded-xl bg-[#131622] text-slate-200 border border-slate-800"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
